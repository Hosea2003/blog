import * as process from 'process';

export default () => ({
  port: parseInt(process.env.PORT),
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    name: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
  },
});
