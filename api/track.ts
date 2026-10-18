// Vercel Serverless Function: Edge Geolocation & Discord Security Filter
// Automatically parses visitor IP, City, Region, and filters out automated bots

export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const webhookUrl =
      process.env.DISCORD_WEBHOOK_URL ||
      'https://discord.com/api/webhooks/1547841270838337637/CbUzIP0jo5kls9Bx7oxZJ5qn4cV-pWLOw_0rng7FOcXv1OPL5kDoD5wwtuTgwdkot8QY';

    const userAgent = (req.headers['user-agent'] || '').toLowerCase();
    
    // Comprehensive bot / crawler detection
    const isBot = /bot|crawl|spider|google|bing|yahoo|duckduckgo|baidu|yandex|vercel|petal|facebook|twitter|meta|discord|telegram|whatsapp|slack|preview|scanner|lighthouse|headless/i.test(
      userAgent
    );

    const { type, payload } = req.body || {};

    // 1. Read Edge Geolocation from Vercel native headers
    const rawCity = req.headers['x-vercel-ip-city'];
    const city = rawCity ? decodeURIComponent(rawCity) : null;
    const region = req.headers['x-vercel-ip-country-region'] || null;
    const country = req.headers['x-vercel-ip-country'] || 'ID';
    const forwarded = req.headers['x-forwarded-for'];
    const clientIp = (forwarded ? forwarded.split(',')[0] : req.socket?.remoteAddress || '127.0.0.1').trim();

    // Construct readable location
    let locationText = 'Indonesia (Lokal / Terproteksi)';
    if (city) {
      locationText = `${city}${region ? `, ${region}` : ''} - ${country} (IP: ${clientIp})`;
    } else if (country && country !== 'ID') {
      locationText = `${country} (IP: ${clientIp})`;
    } else if (clientIp && clientIp !== '127.0.0.1') {
      locationText = `Indonesia (IP: ${clientIp})`;
    }

    // 2. Enhance Embed Payload with Accurate Geolocation & Visitor Type
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
