import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Prestataire = db.define('prestataire', {
    id_prestataire: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_prestataire: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_typeprestataire: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'typeprestataire',
            key: 'id_typeprestataire',
        },
    },
}, {timestamps: false, freezeTableName: true});

export default Prestataire;
