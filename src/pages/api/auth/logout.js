import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';

export default withIronSessionApiRoute((req, res) => {
  req.session.destroy();
  res.status(200).json({ message: "Đã đăng xuất, session đã bị xóa" });
}, sessionOptions);