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

// Association :

model.Users.belongsTo(model.Role, {foreignKey: 'id_role'});
model.Users.belongsTo(model.VirtualAccount, {foreignKey: 'id_virtualaccount'});
model.Users.belongsTo(model.Prestataire, {foreignKey: 'id_prestataire'});
model.Role.hasMany(model.Users, {foreignKey: 'id_role'});
model.VirtualAccount.hasOne(model.Users, {foreignKey: 'id_virtualaccount'});
model.Prestataire.hasOne(model.Users, {foreignKey: 'id_prestataire'});

model.Access.belongsTo(model.Role, {foreignKey: 'id_role'});
model.Access.belongsTo(model.Droit, {foreignKey: 'id_droit'});
model.Role.hasMany(model.Access, {foreignKey: 'id_role'});
model.Droit.hasMany(model.Access, {foreignKey: 'id_droit'});

model.Bought.belongsTo(model.Users, {foreignKey: 'id_user'});
model.Bought.belongsTo(model.Ticket, {foreignKey: 'id_ticket'});
model.Bought.belongsTo(model.Date_validity_ticket, {foreignKey: 'date_start_validity'});
model.Bought.belongsTo(model.Date_validity_ticket, {foreignKey: 'date_end_validity'});
model.Users.hasMany(model.Bought, {foreignKey: 'id_user'});
model.Ticket.hasMany(model.Bought, {foreignKey: 'id_ticket'});
model.Date_validity_ticket.hasMany(model.Bought, {foreignKey: 'date_start_validity'});
model.Date_validity_ticket.hasMany(model.Bought, {foreignKey: 'date_end_validity'});

model.Concert.belongsTo(model.Artist, {foreignKey: 'id_artist'});
model.Concert.belongsTo(model.Scene, {foreignKey: 'id_scene'});
model.Artist.hasMany(model.Concert, {foreignKey: 'id_artist'});
model.Scene.hasMany(model.Concert, {foreignKey: 'id_scene'});

model.Have.belongsTo(model.Artist, {foreignKey: 'id_artist'});
model.Have.belongsTo(model.SocialNetwork, {foreignKey: 'id_socialnetwork'});
model.Artist.hasMany(model.Have, {foreignKey: 'id_artist'});
model.SocialNetwork.hasMany(model.Have, {foreignKey: 'id_socialnetwork'});

model.Make.belongsTo(model.Artist, {foreignKey: 'id_artist'});
model.Make.belongsTo(model.MusicStyle, {foreignKey: 'id_musicstyle'});
model.Artist.hasMany(model.Make, {foreignKey: 'id_artist'});
model.MusicStyle.hasMany(model.Make, {foreignKey: 'id_musicstyle'});

model.OrigineArtist.belongsTo(model.Artist, {foreignKey: 'id_artist'});
model.OrigineArtist.belongsTo(model.Nationality, {foreignKey: 'id_nationality'});
model.Artist.hasMany(model.OrigineArtist, {foreignKey: 'id_artist'});
model.Nationality.hasMany(model.OrigineArtist, {foreignKey: 'id_nationality'});

model.Origineuser.belongsTo(model.Users, {foreignKey: 'id_user'});
model.Origineuser.belongsTo(model.Nationality, {foreignKey: 'id_nationality'});
model.Users.hasMany(model.Origineuser, {foreignKey: 'id_user'});
model.Nationality.hasMany(model.Origineuser, {foreignKey: 'id_nationality'});

model.Prestataire.belongsTo(model.TypePrestataire, {foreignKey: 'id_typeprestataire'});
model.TypePrestataire.hasMany(model.Prestataire, {foreignKey: 'id_typeprestataire'});

model.Proposes.belongsTo(model.Prestataire, {foreignKey: 'id_prestataire'});
model.Proposes.belongsTo(model.Service, {foreignKey: 'id_service'});
model.Prestataire.hasMany(model.Proposes, {foreignKey: 'id_prestataire'});
model.Service.hasMany(model.Proposes, {foreignKey: 'id_service'});

model.Reserve.belongsTo(model.Users, {foreignKey: 'id_user'});
model.Reserve.belongsTo(model.Place, {foreignKey: 'id_place'});
model.Reserve.belongsTo(model.Date_reserve, {foreignKey: 'date_start_placereserved'});
model.Reserve.belongsTo(model.Date_reserve, {foreignKey: 'date_end_placereserved'});
model.Users.hasMany(model.Reserve, {foreignKey: 'id_user'});
model.Place.hasMany(model.Reserve, {foreignKey: 'id_place'});
model.Date_reserve.hasMany(model.Reserve, {foreignKey: 'date_start_placereserved'});
model.Date_reserve.hasMany(model.Reserve, {foreignKey: 'date_end_placereserved'});

model.Scene.belongsTo(model.TypeScene, {foreignKey: 'id_typescene'});
model.TypeScene.hasMany(model.Scene, {foreignKey: 'id_typescene'});

model.Ticket.belongsTo(model.Price, {foreignKey: 'id_price'});
model.Price.hasMany(model.Ticket, {foreignKey: 'id_price'});

model.VirtualAccount.belongsTo(model.Qr_code, {foreignKey: 'id_qr_code'});
model.Qr_code.hasMany(model.VirtualAccount, {foreignKey: 'id_qr_code'});

export default model;