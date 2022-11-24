import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Have = db.define('have' , {
    id_artist: {
        type : DataTypes.INT,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'artist',
            key: 'id_artist'
        }

    },
    id_socialnetwork: {
        type : DataTypes.INT,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'socialnetwork',
            key: 'id_socialnetwork'
        }
    },

},{timestamps: true , freezeTableName: true});

export default Have ;