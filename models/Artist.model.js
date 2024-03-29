import {DataTypes} from "sequelize" ;
import db from '../db/db.js' ;

const Artist = db.define('artist',{
    id_artist :{
        type : DataTypes.INTEGER,
        primaryKey : true ,
        serial : true ,
        autoIncrement : true ,
        allowNull : false ,
    },
    name :{
        type : DataTypes.STRING ,
        allowNull : false ,
    }, 
    image :{
        type : DataTypes.STRING,
        allowNull : false,
    },
    biography :{
        type : DataTypes.TEXT ,
        allowNull : false ,
    },
    genre :{
        type : DataTypes.STRING,
        allowNull : false ,
    }, 
}, {timestamps:false , freezeTableName:true});
    
export default Artist; 

