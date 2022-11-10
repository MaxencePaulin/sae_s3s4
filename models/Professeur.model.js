import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Professeur = db.define('professeur', {
    noprofesseur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        allowNull: false,
    },
    nomprofesseur : {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {timestamps: false, freezeTableName: true});

export default Professeur;