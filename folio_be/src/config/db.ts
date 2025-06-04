import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  dialectOptions: env === 'production' ? {
    ssl: { require: true, rejectUnauthorized: false }
  } : {},
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully!');
    await sequelize.sync(); // auto-creates tables based on models
    console.log('✅ Database synced!');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  }
};