import { DataTypes } from "sequelize";
import db from '../db/db.js';

const Nationality = db.define ('nationality', {
    id_nationality: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true, 
        allowNull: false,
    },
    libelle_nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {timestamps: false, freezeTableName: true});

export default Nationality;