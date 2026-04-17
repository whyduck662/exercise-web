import { serialize } from 'cookie';

export default function handler(req, res) {
  const { theme } = req.query;
  if (theme !== 'light' && theme !== 'dark') {
    return res.status(400).json({ message: "Theme không hợp lệ" });
  }

  res.setHeader('Set-Cookie', serialize('theme', theme, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7 // 1 tuần
  }));
  
  return res.status(200).json({ message: `Đã thiết lập giao diện ${theme}` });
}