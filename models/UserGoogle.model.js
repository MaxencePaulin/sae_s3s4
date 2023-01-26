import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const UserGoogle = db.define('usersGoogle', {
    id_google: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    id_role: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        foreignKey: true,
        references: {
            model: 'role',
            key: 'id_role',
        }
    },
}, {timestamps: false, freezeTableName: true});

export default UserGoogle;