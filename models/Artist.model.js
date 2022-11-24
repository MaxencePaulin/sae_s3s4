import {DataTypes} from "sequelize" ;
import db from '../db/db.js' ;

const Artist = db.define('admin',{
    idartist :{
        type : DataTypes.INTEGER,
        primaryKey : true ,
        serial : true ,
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
    id_genre :{
        type : DataTypes.INTEGER,
        allowNull : false ,
        foreignKey : true ,
        references : { 
            model : 'genre' , 
            key : 'id_genre'
        },
    }, 
}, {timestamps:false , freezeTableName:true});
    
export default Admin ;

