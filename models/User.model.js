import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const User = db.define('users', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    bankcard: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_qr_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: 'qr_code',
            key: 'id_qr_code'
        }
    },
    id_role: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        foreignKey: true,
        references: {
            model: 'role',
            key: 'id_role',
        }
    },
    id_virtualaccount: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'virtualaccount',
            key: 'id_virtualaccount'
        }
    },
    id_prestataire: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        references: {
            model: 'prestataire',
            key: 'id_prestataire'
        }
    },
    id_genre: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
            model: 'genre',
            key: 'id_genre'
        }
    },
}, {timestamps: false, freezeTableName: true});

export default User;