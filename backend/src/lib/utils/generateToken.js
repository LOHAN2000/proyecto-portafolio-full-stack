import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  });

  res.cookie('jwt', token, {
    httpOnly: true,          // no accesible desde JavaScript frontend
    secure: false,           // 🚫 permite HTTP sin HTTPS :contentReference[oaicite:0]{index=0}
    sameSite: 'lax',         // envío en navegación de primer partido, o:
    // sameSite: 'none',     // si necesitas cross-site sin restricciones :contentReference[oaicite:1]{index=1}
    maxAge: 15 * 24 * 60 * 60 * 1000,
    path: '/'
  });
};