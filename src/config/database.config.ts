import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    schema: process.env.DATABASE_SCHEMA,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/../../db/migrations/*{.ts,.js}`],
    migrationsTableName: 'migrations',
}));
