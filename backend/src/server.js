import 'dotenv/config'; 
import app from './app.js';
import { sequelize } from './config/db.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida con éxito.');
    await sequelize.sync(); 
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