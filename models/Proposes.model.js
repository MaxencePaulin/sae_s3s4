import { DataTypes} from 'sequelize' ;
import db from '../db/db.js' ;

const Proposes = db.define('proposes' , {
    id_prestataire: {
        type : DataTypes.INTEGER,
        primaryKey : true ,
        allowNull : false ,
        foreignKey: true,
        references: {
            model: 'prestataire',
            key: 'id_prestataire'
        }

    },
    id_service: {
        type : DataTypes.INTEGER,
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