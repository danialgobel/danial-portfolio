// In-memory IP rate limiter (Sliding window: max 25 req/minute per IP)
const ipRateLimits = new Map<string, { count: number; resetAt: number }>();

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Origin & Referer Verification to block third-party cross-site abuse
  const origin = (req.headers['origin'] || req.headers['referer'] || '').toLowerCase();
  const host = (req.headers['host'] || '').toLowerCase();
  if (origin) {
    const isAllowed =
      origin.includes('vercel.app') ||
      origin.includes('danialhabib.dev') ||
      origin.includes('localhost') ||
      origin.includes('127.0.0.1') ||
      host.includes('vercel.app');
    if (!isAllowed) {
      return res.status(403).json({ error: 'Forbidden origin' });
    }
  }

  // 2. Extract Client IP and Apply Rate Limiting
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp = (forwarded ? forwarded.split(',')[0] : req.socket?.remoteAddress || '127.0.0.1').trim();

  const now = Date.now();
  const limit = ipRateLimits.get(clientIp);
  if (limit && now < limit.resetAt) {
    if (limit.count >= 25) {
      return res.status(429).json({ error: 'Rate limit exceeded. Please wait a moment.' });
    }
    limit.count++;
  } else {
    ipRateLimits.set(clientIp, { count: 1, resetAt: now + 60000 });
  }

  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      // Gracefully skip if DISCORD_WEBHOOK_URL is not configured in Vercel settings
      return res.status(200).json({ status: 'skipped', message: 'DISCORD_WEBHOOK_URL not configured' });
    }

    const userAgent = (req.headers['user-agent'] || '').toLowerCase();
    
    // Comprehensive bot / crawler detection
    const isBot = /bot|crawl|spider|google|bing|yahoo|duckduckgo|baidu|yandex|vercel|petal|facebook|twitter|meta|discord|telegram|whatsapp|slack|preview|scanner|lighthouse|headless/i.test(
      userAgent
    );

    const { type, payload } = req.body || {};

    // 3. Read Edge Geolocation from Vercel native headers
    const rawCity = req.headers['x-vercel-ip-city'];
    const city = rawCity ? decodeURIComponent(rawCity) : null;
    const region = req.headers['x-vercel-ip-country-region'] || null;
    const country = req.headers['x-vercel-ip-country'] || 'ID';

    // Construct readable location
    let locationText = 'Indonesia (Lokal / Terproteksi)';
    if (city) {
      locationText = `${city}${region ? `, ${region}` : ''} - ${country} (IP: ${clientIp})`;
    } else if (country && country !== 'ID') {
      locationText = `${country} (IP: ${clientIp})`;
    } else if (clientIp && clientIp !== '127.0.0.1') {
      locationText = `Indonesia (IP: ${clientIp})`;
    }

    // 4. Handle Direct Message Submission from Contact Section
    if (type === 'MESSAGE') {
      const { senderName, senderContact, senderMessage } = req.body || {};
      if (!senderName || !senderContact || !senderMessage) {
        return res.status(400).json({ error: 'Form data incomplete' });
      }

      // Smart contact formatter (click-to-chat WhatsApp link or mailto)
      const cleanPhone = String(senderContact).replace(/\D/g, '');
      let contactDisplay = String(senderContact);
      if (cleanPhone.length >= 9) {
        const intlPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
        contactDisplay = `[${senderContact} (Klik untuk Chat WA)](https://wa.me/${intlPhone}?text=Halo%20${encodeURIComponent(senderName)},%20terima%20kasih%20telah%20menghubungi%20saya%20lewat%20portofolio)`;
      } else if (String(senderContact).includes('@')) {
        contactDisplay = `[${senderContact}](mailto:${senderContact})`;
      }

      const messageEmbed = {
        title: '📩 PESAN BARU DARI PENGUNJUNG PORTOFOLIO!',
        description: `Seseorang baru saja mengirimkan pesan / tawaran proyek melalui formulir kontak web portofoliomu:`,
        color: 0x6366f1, // Indigo
        fields: [
          { name: '👤 Nama Pengirim', value: `**${senderName}**`, inline: true },
          { name: '📞 Kontak Balasan', value: contactDisplay, inline: true },
          { name: '📍 Lokasi Pengirim', value: `📍 **${locationText}**`, inline: false },
          { name: '💬 Isi Pesan / Proyek', value: `>>> ${senderMessage}`, inline: false },
          { name: '🎥 Rekaman Layar (Microsoft Clarity)', value: '[▶️ Tonton Rekaman Pengunjung di Clarity](https://clarity.microsoft.com/projects/view/yzn3t7oord/recordings)', inline: false }
        ],
        footer: { text: 'DanialGobel Portfolio • Direct Inbox Alert' },
        timestamp: new Date().toISOString()
      };

      const discordRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [messageEmbed] })
      });

      if (!discordRes.ok) {
        const errText = await discordRes.text();
        return res.status(discordRes.status).json({ error: 'Discord webhook error', detail: errText });
      }

      return res.status(200).json({ status: 'success', message: 'Pesan berhasil terkirim' });
    }

    // 5. Enhance Embed Payload for Regular Tracking with Accurate Geolocation & Visitor Type
    if (payload?.embeds?.[0]?.fields) {
      const fields = payload.embeds[0].fields;

      // Update or inject location field
      const locIdx = fields.findIndex((f: any) =>
        f.name.toLowerCase().includes('lokasi') || f.name.toLowerCase().includes('estimasi')
      );
      if (locIdx >= 0) {
        fields[locIdx].value = `📍 **${locationText}**`;
      } else {
        fields.push({ name: '📍 Lokasi Pengunjung (Vercel Edge Geo)', value: `📍 **${locationText}**`, inline: false });
      }

      // Inject Visitor Verification Status (Human vs Crawler)
      fields.push({
        name: '🛡️ Identifikasi Pengunjung',
        value: isBot
          ? '⚠️ `BOT / AUTOMATED CRAWLER` (Bukan orang asli, hanya mesin pemindai/preview link)'
          : '👤 `PENGUNJUNG ASLI (HUMAN)` (Orang yang sedang aktif membuka portofolio)',
        inline: false
      });

      // Inject Direct Link to Clarity Screen Recordings Dashboard
      fields.push({
        name: '🎥 Rekaman Layar Live (Microsoft Clarity)',
        value: '[▶️ Tonton Rekaman Layar Pengunjung di Clarity](https://clarity.microsoft.com/projects/view/yzn3t7oord/recordings)',
        inline: false
      });
    }

    // 3. Forward securely to Discord Webhook from server
    const discordRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!discordRes.ok) {
      const errText = await discordRes.text();
      return res.status(discordRes.status).json({ error: 'Discord webhook error', detail: errText });
    }

    return res.status(200).json({ status: 'success', location: locationText, isBot });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
