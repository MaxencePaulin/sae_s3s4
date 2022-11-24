import { DataTypes } from "sequelize";
import db from '../db/db.js';

const Services = db.define('services', {
    id_service; {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true, 
        allowNull: false,
    },
    libelle_service: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});