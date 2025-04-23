import express from 'express';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
  credentials: true, // Permite cookies
}));
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

export default app;