import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "aurum-dev-secret-change-me";

export function signToken(user) {
  return jwt.sign(
    { id: user._id.toString(), email: user.email, name: user.name },
    SECRET,
    { expiresIn: "7d" }
  );
}

export function authRequired(req, res, next) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Требуется авторизация" });
  }

  try {
    const payload = jwt.verify(header.slice(7), SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: "Сессия истекла, войдите снова" });
  }
}
