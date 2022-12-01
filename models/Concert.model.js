import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Concert = db.define('concert' , {
    id_artist: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'artist',
            key: 'id_artist'
        }

    },
    id_scene: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'scene',
            key: 'id_scene'
        }
    },
    date_concert : {
        type : DataTypes.DATE ,
        allowNull : false
    }

},{timestamps: false, freezeTableName: true});

export default Concert ;