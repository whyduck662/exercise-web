import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/lib/session';

export default withIronSessionApiRoute(async (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: "Bạn chưa đăng nhập. Vui lòng login!" });
  }

  // Tăng bộ đếm truy cập
  user.profileViews += 1;
  await req.session.save();

  res.status(200).json({
    username: user.username,
    loginTime: user.loginTime,
    profileViews: user.profileViews
  });
}, sessionOptions);