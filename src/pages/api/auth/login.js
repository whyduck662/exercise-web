import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';

export default withIronSessionApiRoute(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const { username } = req.body;
  
  // Lưu thông tin vào session
  req.session.user = {
    username: username,
    loginTime: new Date().toLocaleString(),
    profileViews: 0 // Khởi tạo bộ đếm
  };
  
  await req.session.save();
  res.status(200).json({ message: "Đăng nhập thành công" });
}, sessionOptions);