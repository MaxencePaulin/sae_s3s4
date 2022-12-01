import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Reserve = db.define('reserve' , {
    id_user: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'users',
            key: 'id_user'
        }

    },
    id_place: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'place',
            key: 'id_place'
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
},{timestamps: false, freezeTableName: true});

export default Reserve ;