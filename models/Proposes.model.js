import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Proposes = db.define('proposes' , {
    id_prestataire: {
        type : DataTypes.INT,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'role',
            key: 'id_prestataire'
        }

    },
    id_service: {
        type : DataTypes.INT,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'service',
            key: 'id_service'
        }
    },

},{timestamps: true , freezeTableName: true});

export default Proposes ;