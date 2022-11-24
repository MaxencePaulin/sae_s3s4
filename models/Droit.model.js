import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Droit = db.define('droit', {
    id_droit: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_droit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {timestamps: false, freezeTableName: true});

export default Droit;