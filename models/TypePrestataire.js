import { DataTypes } from "sequelize";
import db from '../db/db.js';

const TypePrestataire = db.define('typeprestataire' , {
    id_typeprestataire:{
        type : DataTypes.INT,
        primaryKey: true ,
        serial : true,
        autoIncrement: true ,
        allowNull : false ,
    },
    libelle_prestataire:{
        type: DataTypes.STRING ,
        allowNull : true ,
    }
}, { timestamps:false , freezeTableName: true});

export default TypePrestataire;