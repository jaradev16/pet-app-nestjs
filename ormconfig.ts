export default {
  type: 'postgres',
  schema: 'public',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migrations',
  },
  seeds: ['seeds/**/*{.seed.ts,.seed.js}'],
  factories: ['seeds/**/*{.factory.ts,.factory.js}'],
};