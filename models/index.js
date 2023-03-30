import Users from "./_Users.model.js";
import Access from "./Access.model.js";
import Artist from "./Artist.model.js";
import Bought from "./Bought.model.js";
import Concert from "./Concert.model.js";
import Date_reserve from "./Date_reserve.model.js";
import Date_validity_ticket from "./Date_validity_ticket.model.js";
import Droit from "./Droit.model.js";
import Have from "./Have.model.js";
import Make from "./Make.model.js";
import MusicStyle from "./MusicStyle.model.js";
import Nationality from "./Nationality.model.js";
import OrigineArtist from "./OrigineArtist.model.js";
import Origineuser from "./Origineuser.model.js";
import Place from "./Place.model.js";
import Prestataire from "./Prestataire.model.js";
import Price from "./Price.model.js";
import Proposes from "./Proposes.model.js";
import Qr_code from "./Qr_code.model.js";
import Reserve from "./Reserve.model.js";
import Role from "./Role.model.js";
import Scene from "./Scene.model.js";
import Service from "./Service.model.js";
import SocialNetwork from "./SocialNetwork.model.js";
import Ticket from "./Ticket.model.js";
import TypePrestataire from "./TypePrestataire.model.js";
import TypeScene from "./TypeScene.model.js";
import VirtualAccount from "./VirtualAccount.model.js";
import Guest_book from "./Guest_book.models.js";


const model = {};

// Models/tables:

model.Users = Users;
model.Access = Access;
model.Artist = Artist;
model.Bought = Bought;
model.Concert = Concert;
model.Date_reserve = Date_reserve;
model.Date_validity_ticket = Date_validity_ticket;
model.Droit = Droit;
model.Have = Have;
model.Make = Make;
model.MusicStyle = MusicStyle;
model.Nationality = Nationality;
model.OrigineArtist = OrigineArtist;
model.Origineuser = Origineuser;
model.Place = Place;
model.Prestataire = Prestataire;
model.Price = Price;
model.Proposes = Proposes;
model.Qr_code = Qr_code;
model.Reserve = Reserve;
model.Role = Role;
model.Scene = Scene;
model.Service = Service;
model.SocialNetwork = SocialNetwork;
model.Ticket = Ticket;
model.TypePrestataire = TypePrestataire;
model.TypeScene = TypeScene;
model.VirtualAccount = VirtualAccount;
model.Guest_book = Guest_book;

// Association :

model.Users.belongsTo(model.Role, {foreignKey: 'id_role', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Users.belongsTo(model.VirtualAccount, {foreignKey: 'id_virtualaccount', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Users.belongsTo(model.Prestataire, {foreignKey: 'id_prestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Role.hasMany(model.Users, {foreignKey: 'id_role', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.VirtualAccount.hasOne(model.Users, {foreignKey: 'id_virtualaccount', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Prestataire.hasOne(model.Users, {foreignKey: 'id_prestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Access.belongsTo(model.Role, {foreignKey: 'id_role', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Access.belongsTo(model.Droit, {foreignKey: 'id_droit', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Role.hasMany(model.Access, {foreignKey: 'id_role', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Droit.hasMany(model.Access, {foreignKey: 'id_droit', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Bought.belongsTo(model.Users, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Bought.belongsTo(model.Ticket, {foreignKey: 'id_ticket', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Bought.belongsTo(model.Date_validity_ticket, {foreignKey: 'date_start_validity', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Bought.belongsTo(model.Date_validity_ticket, {foreignKey: 'date_end_validity', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Users.hasMany(model.Bought, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Ticket.hasMany(model.Bought, {foreignKey: 'id_ticket', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Date_validity_ticket.hasMany(model.Bought, {foreignKey: 'date_start_validity', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Date_validity_ticket.hasMany(model.Bought, {foreignKey: 'date_end_validity', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Concert.belongsTo(model.Artist, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Concert.belongsTo(model.Scene, {foreignKey: 'id_scene', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Artist.hasMany(model.Concert, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Scene.hasMany(model.Concert, {foreignKey: 'id_scene', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Have.belongsTo(model.Artist, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Have.belongsTo(model.SocialNetwork, {foreignKey: 'id_socialnetwork', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Artist.hasMany(model.Have, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.SocialNetwork.hasMany(model.Have, {foreignKey: 'id_socialnetwork', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Make.belongsTo(model.Artist, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Make.belongsTo(model.MusicStyle, {foreignKey: 'id_musicstyle', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Artist.hasMany(model.Make, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.MusicStyle.hasMany(model.Make, {foreignKey: 'id_musicstyle', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.OrigineArtist.belongsTo(model.Artist, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.OrigineArtist.belongsTo(model.Nationality, {foreignKey: 'id_nationality', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Artist.hasMany(model.OrigineArtist, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Nationality.hasMany(model.OrigineArtist, {foreignKey: 'id_nationality', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Origineuser.belongsTo(model.Users, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Origineuser.belongsTo(model.Nationality, {foreignKey: 'id_nationality', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Users.hasMany(model.Origineuser, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Nationality.hasMany(model.Origineuser, {foreignKey: 'id_nationality', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Prestataire.belongsTo(model.TypePrestataire, {foreignKey: 'id_typeprestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.TypePrestataire.hasMany(model.Prestataire, {foreignKey: 'id_typeprestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Proposes.belongsTo(model.Prestataire, {foreignKey: 'id_prestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Proposes.belongsTo(model.Service, {foreignKey: 'id_service', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Prestataire.hasMany(model.Proposes, {foreignKey: 'id_prestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Service.hasMany(model.Proposes, {foreignKey: 'id_service', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Reserve.belongsTo(model.Users, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Reserve.belongsTo(model.Place, {foreignKey: 'id_place', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Reserve.belongsTo(model.Date_reserve, {foreignKey: 'date_start_placereserved', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Reserve.belongsTo(model.Date_reserve, {foreignKey: 'date_end_placereserved', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Users.hasMany(model.Reserve, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Place.hasMany(model.Reserve, {foreignKey: 'id_place', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Date_reserve.hasMany(model.Reserve, {foreignKey: 'date_start_placereserved', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Date_reserve.hasMany(model.Reserve, {foreignKey: 'date_end_placereserved', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Scene.belongsTo(model.TypeScene, {foreignKey: 'id_typescene', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.TypeScene.hasMany(model.Scene, {foreignKey: 'id_typescene', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Ticket.belongsTo(model.Price, {foreignKey: 'id_price', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Price.hasMany(model.Ticket, {foreignKey: 'id_price', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.VirtualAccount.belongsTo(model.Qr_code, {foreignKey: 'id_qr_code', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Qr_code.hasMany(model.VirtualAccount, {foreignKey: 'id_qr_code', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

model.Guest_book.belongsTo(model.Users, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Users.hasMany(model.Guest_book, {foreignKey: 'id_user', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Guest_book.belongsTo(model.Artist, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Artist.hasMany(model.Guest_book, {foreignKey: 'id_artist', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Guest_book.belongsTo(model.Prestataire, {foreignKey: 'id_prestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
model.Prestataire.hasMany(model.Guest_book, {foreignKey: 'id_prestataire', onDelete: 'CASCADE', onUpdate: 'CASCADE'});


export default model;