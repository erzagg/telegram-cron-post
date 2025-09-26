// api/cron.js (DIAGNOSTIC — sementara)
export default async function handler(req, res) {
  // JANGAN kirim ke Telegram. Cuma balik info debug.
  return res.status(200).json({
    marker: "CRON_DIAG_V1",
    now: new Date().toISOString(),
    hasToken: !!process.env.TELEGRAM_TOKEN,
    hasChat: !!process.env.TELEGRAM_CHAT_ID,
    hasSheet: !!process.env.SHEET_ID,
    url: req.url
  });
}
