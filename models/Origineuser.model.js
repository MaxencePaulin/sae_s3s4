import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Origineuser = db.define('origineuser' , {
    id_nationality: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'nationality',
            key: 'id_nationality'
        }
    },
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

},{timestamps: false, freezeTableName: true});

export default Origineuser ;