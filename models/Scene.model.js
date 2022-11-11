import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Scene = db.define('scene', {
    id_scene: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_scene: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_typescene: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {timestamps: false, freezeTableName: true});

export default Scene;