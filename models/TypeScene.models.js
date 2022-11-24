import { DataTypes } from "sequelize";
import db from '../db/db.js';

const TypeScene = db.define ('typescene', {
    id_typescene: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_typescene: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {timestamps: false, freezeTableName: true});

export default TypeScene;