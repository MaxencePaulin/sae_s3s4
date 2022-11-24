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
        defaultValue: 0.00,
    },
    id_qr_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'qr_code',
            key: 'id_qr_code',
        }
    }
}, {timestamps: false, freezeTableName: true});

export default Virtualaccount;