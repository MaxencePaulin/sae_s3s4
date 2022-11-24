import { DataTypes } from 'sequelize';
import db from '../db/db.js';

const Ticket = db.define('ticket', {
    id_ticket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    type_ticket: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: 'price',
            key: 'id_price',
        },
    },
}, {timestamps: false, freezeTableName: true});

export default Ticket;