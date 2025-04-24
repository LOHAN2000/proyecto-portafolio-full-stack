import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,       // permite cualquier origen
    credentials: true   // habilita envío de cookies
  })
);
app.use(cookieParser());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

export default app;