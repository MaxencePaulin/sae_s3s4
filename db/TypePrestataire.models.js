import { DataTypes } from "sequelize";
import db from '../db/db.js';

const TypePrestataire = db.define('typeprestataire', {
    id_prestataire: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_typeprestataire: {
        type: DataTypes.STRING?,
        allowNull: false,
    }
});