export default function handler(req, res) {
  const theme = req.cookies.theme || 'light';
  res.status(200).json({ 
    message: "Chào mừng bạn đến với trang chủ",
    theme_dang_dung: theme 
  });
}