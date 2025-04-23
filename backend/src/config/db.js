import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false    // <<< Permite certificados auto-firmados
    }
  },
  logging: false
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Crea tablas si no existen (sin borrar datos)
    console.log('✅ Tablas sincronizadas');
  } catch (error) {
    console.error('❌ Error al sincronizar:', error);
  }
})();