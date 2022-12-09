import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Guest_book = db.define('guest_book', {
    id_avis: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_avis: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_artist: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'artist',
            key: 'id_artist',
        }
    },
    id_prestataire: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'prestataire',
            key: 'id_prestataire',
        }
    },
    id_user: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'users',
            key: 'id_users',
        }
    }
    
}, {timestamps: false, freezeTableName: true});

export default Guest_book;