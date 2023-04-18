import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  migrations: [],
  migrationsTableName: 'custom_table_name',
  synchronize: true,
};
