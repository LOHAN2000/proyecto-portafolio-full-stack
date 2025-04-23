import express from 'express';
import authRoutes from './routes/auth.routes.js';
import { configDotenv } from 'dotenv';

const app = express();

// Middlewares
app.use(express.json());
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Server is ready');
});

export default app;