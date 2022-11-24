import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Date_reserve = db.define('date_reserve', {
    date_start_placereserved: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
    },
    date_end_placereserved: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true,
    }
}, {timestamps: false, freezeTableName: true});

export default Date_reserve;