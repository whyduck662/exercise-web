export const sessionOptions = {
  password: "complex_password_at_least_32_characters_long", // Mật khẩu để mã hóa cookie (phải trên 32 ký tự)
  cookieName: "my_app_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production", // Chỉ dùng HTTPS khi chạy thực tế
  },
};