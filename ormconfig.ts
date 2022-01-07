export const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  databases: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: false,
    retryDelay: 3000,
    autoLoadEntities: true,
    retryAttempts: 10,
    cli: {
      migrationsDir: 'migrations',
    }
  }

}