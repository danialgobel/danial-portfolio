/**
 * Discord Webhook Visitor & Interaction Tracker
 * Webhook: DanialGobel Portfolio Notifications
 */

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1547841270838337637/CbUzIP0jo5kls9Bx7oxZJ5qn4cV-pWLOw_0rng7FOcXv1OPL5kDoD5wwtuTgwdkot8QY';

// Generate or retrieve persistent session ID for current tab
function getSessionId(): string {
  try {
    let id = sessionStorage.getItem('dg_visitor_id');
    if (!id) {
      id = 'VISITOR-' + Math.random().toString(36).substring(2, 7).toUpperCase();
      sessionStorage.setItem('dg_visitor_id', id);
    }
    return id;
  } catch {
    return 'VISITOR-ANON';
  }
}

// Device & Browser parser
function getDeviceContext() {
  if (typeof window === 'undefined') return { device: 'Unknown', browser: 'Unknown', screen: 'Unknown' };

  const ua = navigator.userAgent;
  let device = 'Desktop (PC / Laptop)';
  if (/mobile/i.test(ua)) device = 'Smartphone (Mobile)';
  else if (/tablet|ipad/i.test(ua)) device = 'Tablet / iPad';

  let browser = 'Browser Lain';
  if (/chrome|crios/i.test(ua) && !/edge|edg|opr/i.test(ua)) browser = 'Google Chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Apple Safari';
  else if (/firefox|fxios/i.test(ua)) browser = 'Mozilla Firefox';
  else if (/edg/i.test(ua)) browser = 'Microsoft Edge';
  else if (/opr|opera/i.test(ua)) browser = 'Opera';

  let os = 'OS Lain';
  if (/windows/i.test(ua)) os = 'Windows';
  else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
  else if (/linux/i.test(ua)) os = 'Linux';

  const screenRes = `${window.screen.width}x${window.screen.height} (DPR: ${window.devicePixelRatio || 1})`;

  return {
    device,
    browser: `${browser} on ${os}`,
    screen: screenRes,
    language: navigator.language || 'id-ID'
  };
}

// Format local Indonesian time
function getFormattedTime(): string {
  const now = new Date();
  return now.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'medium',
    timeStyle: 'medium'
  }) + ' WIB';
}

// Asynchronous Queue to protect against Discord 5 req / 2s Rate Limits
class WebhookQueue {
  private queue: any[] = [];
  private isProcessing = false;
  private minInterval = 650; // ms between requests to stay well within limits
  private lastSendTime = 0;

  push(payload: any) {
    this.queue.push(payload);
    this.process();
  }

  private async process() {
    if (this.isProcessing) return;
    this.isProcessing = true;

    while (this.queue.length > 0) {
      const payload = this.queue.shift();
      const now = Date.now();
      const timeSinceLast = now - this.lastSendTime;
      if (timeSinceLast < this.minInterval) {
        await new Promise((r) => setTimeout(r, this.minInterval - timeSinceLast));
      }

      try {
        await fetch(DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        this.lastSendTime = Date.now();
      } catch (err) {
        // Fail-safe: Never block UI or log fatal errors if adblocker intercepts
      }
    }

    this.isProcessing = false;
  }
}

const webhookQueue = new WebhookQueue();

// ---------------------------------------------------------------------------
// 1. Send Visitor Arrival Notification (Runs Once per Session)
// ---------------------------------------------------------------------------
export async function trackVisitorArrival() {
  if (typeof window === 'undefined') return;

  try {
    if (sessionStorage.getItem('dg_arrival_tracked')) return;
    sessionStorage.setItem('dg_arrival_tracked', 'true');
  } catch {
    // Ignore storage restrictions
  }

  const ctx = getDeviceContext();
  const sessionId = getSessionId();
  const referrer = document.referrer ? document.referrer : 'Langsung (Direct / Bookmark / WhatsApp)';
  const currentUrl = window.location.href;

  // Optional lightweight IP lookup with fast 1.2s timeout
  let locationInfo = 'Mendeteksi...';
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1200);
    const ipRes = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeout);
    if (ipRes.ok) {
      const data = await ipRes.json();
      locationInfo = `${data.city || 'Kota'}, ${data.region || ''} - ${data.country_name || 'Indonesia'} (IP: ${data.ip || 'Tersembunyi'})`;
    }
  } catch {
    locationInfo = 'Indonesia / Terproteksi';
  }

  const embed = {
    title: '🟢 PENGUNJUNG BARU MEMBUKA PORTOFOLIO!',
    description: `Seseorang baru saja membuka website portofolio **DanialGobel**.\nBerikut rincian perangkat dan sumber kunjungan:`,
    color: 0x10b981, // Emerald Green
    fields: [
      { name: '🆔 ID Pengunjung', value: `\`${sessionId}\``, inline: true },
      { name: '🕒 Waktu Kunjungan', value: `\`${getFormattedTime()}\``, inline: true },
      { name: '📱 Tipe Perangkat', value: ctx.device, inline: true },
      { name: '🌐 Browser & OS', value: ctx.browser, inline: true },
      { name: '📐 Resolusi Layar', value: `\`${ctx.screen}\``, inline: true },
      { name: '📍 Estimasi Lokasi', value: locationInfo, inline: false },
      { name: '🔗 Sumber Rujukan (Referrer)', value: `\`${referrer}\``, inline: false },
      { name: '📄 Halaman Awal', value: currentUrl, inline: false }
    ],
    footer: {
      text: 'DanialGobel Portfolio Analytics • Real-time Visitor Tracker'
    },
    timestamp: new Date().toISOString()
  };

  webhookQueue.push({ embeds: [embed] });
}

// ---------------------------------------------------------------------------
// 2. Send Click & Interaction Notification (Throttled & Categorized)
// ---------------------------------------------------------------------------
let lastClickSignature = '';
let lastClickTime = 0;

export function trackUserInteraction(detail: {
  type: 'LINK_EXTERNAL' | 'BUTTON' | 'NAVIGATION' | 'CARD_3D' | 'CONTACT';
  label: string;
  targetUrl?: string;
  section?: string;
}) {
  const now = Date.now();
  const signature = `${detail.type}_${detail.label}_${detail.targetUrl || ''}`;

  // Debounce identical clicks within 1.2s to prevent double-tap duplicates
  if (signature === lastClickSignature && now - lastClickTime < 1200) {
    return;
  }
  lastClickSignature = signature;
  lastClickTime = now;

  const sessionId = getSessionId();
  const ctx = getDeviceContext();

  let color = 0x38bdf8; // Sky Blue default
  let titlePrefix = '🔵 KLIK TAUTAN';

  if (detail.type === 'BUTTON') {
    color = 0x8b5cf6; // Purple
    titlePrefix = '🟣 KLIK TOMBOL';
  } else if (detail.type === 'NAVIGATION') {
    color = 0x06b6d4; // Cyan
    titlePrefix = '🧭 NAVIGASI MENU';
  } else if (detail.type === 'CARD_3D') {
    color = 0xec4899; // Pink
    titlePrefix = '🎴 INTERAKSI 3D LANYARD';
  } else if (detail.type === 'CONTACT') {
    color = 0xf59e0b; // Amber / Gold
    titlePrefix = '🟠 TINDAKAN KONTAK / RESUME';
  }

  const fields: any[] = [
    { name: '🎯 Tindakan Pengunjung', value: `**${detail.label}**`, inline: false },
    { name: '🆔 ID Pengunjung', value: `\`${sessionId}\``, inline: true },
    { name: '🕒 Waktu', value: `\`${getFormattedTime()}\``, inline: true },
    { name: '📱 Perangkat', value: ctx.device, inline: true }
  ];

  if (detail.targetUrl) {
    fields.push({ name: '🔗 Tujuan URL', value: detail.targetUrl, inline: false });
  }

  if (detail.section) {
    fields.push({ name: '📌 Bagian Halaman', value: `\`#${detail.section}\``, inline: true });
  }

  const embed = {
    title: `${titlePrefix}: ${detail.label.substring(0, 45)}`,
    color,
    fields,
    footer: {
      text: `DanialGobel Portfolio • ${sessionId}`
    },
    timestamp: new Date().toISOString()
  };

  webhookQueue.push({ embeds: [embed] });
}

// ---------------------------------------------------------------------------
// 3. Global Click Listener: Intercepts all clicks on links, buttons, and items
// ---------------------------------------------------------------------------
export function initDiscordTracker() {
  if (typeof window === 'undefined') return;

  // Track initial page arrival
  trackVisitorArrival();

  // Attach global click event listener with event delegation
  document.addEventListener(
    'click',
    (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement | null;
        if (!target) return;

        // 1. Check if clicked an <a> link
        const anchor = target.closest('a');
        if (anchor) {
          const href = anchor.getAttribute('href') || '';
          const text = (anchor.innerText || anchor.getAttribute('aria-label') || href).trim();

          // Resume / CV download
          if (href.includes('resume') || href.includes('.pdf') || text.toLowerCase().includes('resume') || text.toLowerCase().includes('cv')) {
            trackUserInteraction({
              type: 'CONTACT',
              label: `Download / Akses Resume [CV] (${text})`,
              targetUrl: href
            });
            return;
          }

          // Email / Mailto
          if (href.startsWith('mailto:')) {
            trackUserInteraction({
              type: 'CONTACT',
              label: `Kirim Email (${href.replace('mailto:', '')})`,
              targetUrl: href
            });
            return;
          }

          // Social Media & External Websites (Instagram, TikTok, GitHub, Satsetwel, Tanabrew, dll)
          if (href.startsWith('http')) {
            trackUserInteraction({
              type: 'LINK_EXTERNAL',
              label: `Buka Tautan: ${text || href}`,
              targetUrl: href
            });
            return;
          }

          // In-page navigation (#projects, #skills, #about, dll)
          if (href.startsWith('#')) {
            trackUserInteraction({
              type: 'NAVIGATION',
              label: `Pindah ke Seksi: ${href} (${text})`,
              section: href.replace('#', '')
            });
            return;
          }
        }

        // 2. Check if clicked a <button>
        const button = target.closest('button');
        if (button) {
          const text = (button.innerText || button.getAttribute('aria-label') || 'Tombol').trim();
          trackUserInteraction({
            type: 'BUTTON',
            label: `Tekan Tombol: "${text.substring(0, 60)}"`,
            section: button.closest('section')?.id || 'general'
          });
          return;
        }

        // 3. Check if clicked 3D Lanyard Canvas area
        const canvas = target.closest('canvas');
        if (canvas) {
          trackUserInteraction({
            type: 'CARD_3D',
            label: 'Menarik / Memutar ID Card Lanyard 3D',
            section: 'hero'
          });
          return;
        }
      } catch {
        // Silently ignore any event extraction errors
      }
    },
    { capture: true, passive: true }
  );
}
