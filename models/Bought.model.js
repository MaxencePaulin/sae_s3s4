import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Bought = db.define('bought' , {
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
    id_ticket: {
        type : DataTypes.INT,
        primaryKey : true ,
        serial : true ,
        autoIncrement: true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'ticket',
            key: 'id_ticket'
        }
    },
    date_start_validity: {
        type : DataTypes.DATE,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'date_validity_ticket',
            key: 'date_start_validity'
        }
    },
    date_end_validity: {
        type : DataTypes.DATE,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'date_validity_ticket',
            key: 'date_end_validity'
        }
    },

},{timestamps: true , freezeTableName: true});

export default Bought ;