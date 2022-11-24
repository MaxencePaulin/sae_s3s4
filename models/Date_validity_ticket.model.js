import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Date_validity_ticket = db.define('date_validity_ticket', {
    date_start_validity: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
    },
    date_end_validity: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
    }
}, {timestamps: false, freezeTableName: true});

export default Date_validity_ticket;