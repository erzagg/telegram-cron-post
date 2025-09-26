export default async function handler(req, res) {
  const isCron = req.headers['x-vercel-cron'] === '1' || req.query.test === '1';

  if (!isCron) return res.status(401).json({ ok: false, msg: 'unauthorized' });

  const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  const text = `🚀 Auto post setiap 30 menit!
Time: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}`;

  const tg = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID, // contoh: @warnatopup atau -100xxxxxxxxxx
      text
    }),
  }).then(r => r.json());

  return res.status(200).json({ ok: true, tg });
}
