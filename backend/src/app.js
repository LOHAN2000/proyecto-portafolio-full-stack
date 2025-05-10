import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',      // desarrollo local Vite por defecto
    'http://localhost:5174',      // desarrollo en Docker
    'https://lohan2000.github.io' // producción frontend
  ],
  credentials: true,
}));
app.use(cookieParser());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

export default app;