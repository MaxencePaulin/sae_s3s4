import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Place = db.define('place', {
    id_place: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    no_place: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {timestamps: false, freezeTableName: true});

export default Place;