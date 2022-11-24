import { DataTypes } from "sequelize";
import db from '../db/db.js';

const MusicStyle = db.define ('muscistyle', {
    id_musicstyle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_musicstyle: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});