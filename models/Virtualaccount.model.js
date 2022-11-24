import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Virtualaccount = db.define('virtualaccount', {
    id_virtualaccount: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        default: 0.00,
    },
}, {timestamps: false, freezeTableName: true});

export default Virtualaccount;