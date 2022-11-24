import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Reserve = db.define('reserve' , {
    id_user: {
        type : DataTypes.INT,
        primaryKey : true ,
        serial : true ,
        autoIncrement: true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'user',
            key: 'id_user'
        }

    },
    id_place: {
        type : DataTypes.INT,
        primaryKey : true ,
        serial : true ,
        autoIncrement: true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'place',
            key: 'id_placetable'
        }
    },
    date_start_placereserved: {
        type : DataTypes.DATE,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'date_reserve',
            key: 'date_start_placereserved'
        }
    },
    date_end_placereserved: {
        type : DataTypes.DATE,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'date_reserve',
            key: 'date_end_placereserved'
        }
    },

},{timestamps: true , freezeTableName: true});

export default Reserve ;