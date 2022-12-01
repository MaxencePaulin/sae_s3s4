import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
import Users from '../models/_Users.model.js';
import Access from '../models/Access.model.js';
import Artist from '../models/Artist.model.js';
import Bought from '../models/Bought.model.js';
import Concert from '../models/Concert.model.js';
import Date_reserve from "../models/Date_reserve.model.js";
import Date_validity_ticket from "../models/Date_validity_ticket.model.js";
import Droit from '../models/Droit.model.js';
import Have from '../models/Have.model.js';
import Make from '../models/Make.model.js';
import MusicStyle from '../models/MusicStyle.model.js';
import Nationality from '../models/Nationality.model.js';
import OrigineArtist from '../models/OrigineArtist.model.js';
import Origineuser from '../models/Origineuser.model.js';
import Place from '../models/Place.model.js';
import Prestataire from '../models/Prestataire.model.js';
import Price from '../models/Price.model.js';
import Proposes from '../models/Proposes.model.js';
import Qr_code from '../models/Qr_code.model.js';
import Reserve from '../models/Reserve.model.js';
import Role from '../models/Role.model.js';
import Scene from '../models/Scene.model.js';
import Service from '../models/Service.model.js';
import SocialNetwork from '../models/SocialNetwork.model.js';
import Ticket from '../models/Ticket.model.js';
import TypePrestataire from '../models/TypePrestataire.model.js';
import TypeScene from '../models/TypeScene.model.js';
import VirtualAccount from '../models/VirtualAccount.model.js';

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER,
    process.env.PG_PASSWORD, {
        host: process.env.PG_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
);

export const model = {}

model.Sequelize = Sequelize;
model.sequelize = sequelize;

// Models/tables:

model.Users = Users(sequelize, Sequelize);
model.Access = Access(sequelize, Sequelize);
model.Artist = Artist(sequelize, Sequelize);
model.Bought = Bought(sequelize, Sequelize);
model.Concert = Concert(sequelize, Sequelize);
model.Date_reserve = Date_reserve(sequelize, Sequelize);
model.Date_validity_ticket = Date_validity_ticket(sequelize, Sequelize);
model.Droit = Droit(sequelize, Sequelize);
model.Have = Have(sequelize, Sequelize);
model.Make = Make(sequelize, Sequelize);
model.MusicStyle = MusicStyle(sequelize, Sequelize);
model.Nationality = Nationality(sequelize, Sequelize);
model.OrigineArtist = OrigineArtist(sequelize, Sequelize);
model.Origineuser = Origineuser(sequelize, Sequelize);
model.Place = Place(sequelize, Sequelize);
model.Prestataire = Prestataire(sequelize, Sequelize);
model.Price = Price(sequelize, Sequelize);
model.Proposes = Proposes(sequelize, Sequelize);
model.Qr_code = Qr_code(sequelize, Sequelize);
model.Reserve = Reserve(sequelize, Sequelize);
model.Role = Role(sequelize, Sequelize);
model.Scene = Scene(sequelize, Sequelize);
model.Service = Service(sequelize, Sequelize);
model.SocialNetwork = SocialNetwork(sequelize, Sequelize);
model.Ticket = Ticket(sequelize, Sequelize);
model.TypePrestataire = TypePrestataire(sequelize, Sequelize);
model.TypeScene = TypeScene(sequelize, Sequelize);
model.VirtualAccount = VirtualAccount(sequelize, Sequelize);

// Association :


