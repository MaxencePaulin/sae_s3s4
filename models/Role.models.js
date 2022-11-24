import { DataTypes } from "sequelize";
import db from '../db/db.js';

const Role = db.define ('role', {
    id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {timestamps: false, freezeTableName: true});

export default Role;