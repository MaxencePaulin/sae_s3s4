import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Origineuser = db.define('originuser' , {
    id_nationality: {
        type : DataTypes.INT,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'nationality',
            key: 'id_nationality'
        }
    },
    id_user: {
        type : DataTypes.INT,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'user',
            key: 'id_user'
        }

    },

},{timestamps: true , freezeTableName: true});

export default Origineuser ;