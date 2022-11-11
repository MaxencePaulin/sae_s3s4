import sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const { Sequelize } = sequelize;
export default new Sequelize(process.env.PG_DATABASE, process.env.PG_USER,
    process.env.PG_PASSWORD, {
        host: process.env.PG_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
);