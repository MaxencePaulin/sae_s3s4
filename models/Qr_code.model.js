import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Qr_code = db.define('qr_code', {
    id_qr_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    qr_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {timestamps: false, freezeTableName: true});

export default Qr_code;