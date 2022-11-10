import sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const { Sequelize } = sequelize;
export default new Sequelize(process.env.PG_DATABASE, process.env.PG_USER,
    process.env.PG_PASSWORD, {
        dialect: 'postgres',
        host: process.env.PG_HOST,
    },
);