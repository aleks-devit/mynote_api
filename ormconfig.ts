module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['dist/app/**/*.model.js'],
  migrations: ['dist/app/database/migrations/*.js'],
  cli: {
    migrationsDir: 'dist/app/database/migrations',
  },
}