import dotenv from 'dotenv';
import app from './app.js';
import { sequelize } from './config/db.js';

dotenv.config();

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida con éxito.');
    await sequelize.sync(); // Sincroniza tablas
    console.log('✅ Tablas sincronizadas correctamente');
  } catch (error) {
    console.error('❌ Error al conectar o sincronizar:', error);
    process.exit(1);
  }

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
})();