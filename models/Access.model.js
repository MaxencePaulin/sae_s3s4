import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Access = db.define('access' , {
    id_role: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'role',
            key: 'id_role'
        }

    },
    id_droit: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'droit',
            key: 'id_droit'
        }
    },

},{timestamps: true , freezeTableName: true});

export default Access ;