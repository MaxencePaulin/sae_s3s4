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

export default model;