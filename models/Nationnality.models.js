import { DataTypes } from "sequelize";
import db from '../db/db.js';

const Nationnality = db.define ('nationnality', {
    id_nationnality: {
        type = DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true, 
        allowNull: false,
    },
    libelle_nationnality: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});