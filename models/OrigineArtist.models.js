import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const OrigineArtist = db.define('origineartist', {
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
    id_nationality: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'nationality',
            key: 'id_nationality',
        },
    },
}, {timestamps: false, freezeTableName: true});
        
export default OrigineArtist;