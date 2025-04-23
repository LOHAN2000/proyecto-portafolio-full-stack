import express from 'express';
import authRoutes from './routes/auth.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready');
});

export default app;