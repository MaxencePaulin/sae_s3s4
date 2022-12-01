import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Bought = db.define('bought' , {
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
    id_ticket: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
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
},{timestamps: false, freezeTableName: true});

export default Bought ;