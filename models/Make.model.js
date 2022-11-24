import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Make = db.define('make', {
    id_artist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'artist',
            key: 'id_artist',
        },
    },
    id_musicstyle: {
        type: DataTypes.INTEGER,
        allowNull: false,   
        foreignKey: true,
        references: {
            model: 'musicstyle',
            key: 'id_musicstyle',
        },
    },
}, {timestamps: false, freezeTableName: true});
