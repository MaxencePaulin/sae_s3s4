import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Price = db.define('price', {
    id_price: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    normal_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    reduc_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }
}, {timestamps: false, freezeTableName: true});

export default Price;