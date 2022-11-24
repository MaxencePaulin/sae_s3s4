import { DataTypes } from "sequelize";
import db from '../db/db.js';

const SocialNetwork = db.define ('socialnetwork', {
    id_socialnetwork: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        serial: true,
        autoIncrement: true,
        allowNull: false,
    },
    libelle_socialnetwork: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    page_socialnetwork: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {timestamps: false, freezeTableName: true});

export default SocialNetwork;