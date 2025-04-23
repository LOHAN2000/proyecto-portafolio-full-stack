import express from 'express'

import authRoutes from './routes/auth.routes.js'
import { sequelize } from './config/db.js';

const app = express();
const PORT = 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida con éxito.');

    await sequelize.sync(); // O `sync({ alter: true })` en desarrollo
    console.log('✅ Tablas sincronizadas correctamente');
  } catch (error) {
    console.error('❌ Error al conectar o sincronizar:', error);
  }
})();

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready')
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})