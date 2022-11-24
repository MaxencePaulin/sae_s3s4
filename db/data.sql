insert into nationality (libelle_nationality) values
('Belge'),
('Française'),
('Italienne'),
('Espagnole'),
('Allemande'),
('Anglaise'),
('Portugaise'),
('Suisse'),
('Luxembourgeoise'),
('Néerlandaise'),
('Américain'),
('Canadien'),
('Australien'),
('Japonais'),
('Chinois'),
('Coréen'),
('Indien'),
('Russe'),
('Brésilien'),
('Argentin'),
('Mexicain'),
('Marocain'),
('Algérien'),
('Tunisien'),
('Libanais'),
('Turc'),
('Egyptien'),
('Sénégalais'),
('Ivoirien'),
('Nigérian'),
('Ghanéen'),
('Sud-Africain'),
('Autre');

insert into role (libelle_role) values
('Utilisateur'),
('VIP'),
('Prestataire'),
('Administrateur');

insert into genre (libelle_genre) values
('Homme'),
('Femme');

insert into virtualaccount(amount) values
(0),
(0),
(0);

insert into typescene(libelle_typescene) values
('Nature'),
('Studio'),
('Extérieur'),
('Intérieur'),
('Autre');

insert into scene (libelle_scene, id_typescene) values
('scene1', 1),
('scene2', 1),
('scene3', 1),
('scene4', 2),
('scene5', 2),
('scene6', 2),
('scene7', 3),
('scene8', 3),
('scene9', 4),
('scene10', 4),
('scene11', 5);

insert into qr_code(qr_code) values
('QR_code1'),
('QR_code2'),
('QR_code3');

insert into users (login, password, email, id_genre, id_virtualaccount) values
('admin', 'admin', 'admin@gmail.com', 1, 1),
('user', 'user', 'user@gmail.com', 1, 2),
('guest', 'guest', 'guest@gmail.com', 2, 3);

insert into origineuser (id_user, id_nationality) values
(1, 1),
(2, 2),
(3, 4);

insert into artist (name_artist, id_genre) values
('artist1', 1),
('artist2', 1),
('artist3', 1),
('artist4', 2),
('artist5', 2),
('artist6', 2);

insert into concert (id_artist, id_scene, date_concert) values
(1, 1, '2020-01-01'),
(2, 2, '2020-01-01'),
(3, 3, '2020-01-01'),
(4, 4, '2020-01-01'),
(5, 5, '2020-01-01'),
(6, 6, '2020-01-01');

insert into place (id_scene, id_qr_code) values
(1, 1),
(2, 2),
(3, 3);

insert into ticket (id_concert, id_place) values
(1, 1),
(2, 2),
(3, 3);

insert into date_validity_ticket (date_start_validity, date_end_validity) values
('2020-01-01', '2020-01-01'),
('2020-01-01', '2020-01-01'),
('2020-01-01', '2020-01-01');

insert into date_reserve (date_start_placereserved, date_end_placereserved) values
('2020-01-01', '2020-01-01'),
('2020-01-01', '2020-01-01'),
('2020-01-01', '2020-01-01');

insert into droit (libelle_droit) values
('admin'),
('user'),
('guest');

insert into service (libelle_service) values
('service1'),
('service2'),
('service3');

insert into proposes (id_droit, id_service) values
(1, 1),
(2, 2),
(3, 3);

insert into access (id_role, id_droit) values
(1, 2),
(2, 3),
(3, 1),
(4, 1);

insert into bought (id_user, id_ticket, date_start_validity, date_end_validity) values
(1, 1, '2020-01-01', '2020-01-01'),
(2, 2, '2020-01-01', '2020-01-01'),
(3, 3, '2020-01-01', '2020-01-01');

insert into reserve (id_user, id_place, date_start_placereserved, date_end_placereserved) values
(1, 1, '2020-01-01', '2020-01-01'),
(2, 2, '2020-01-01', '2020-01-01'),
(3, 3, '2020-01-01', '2020-01-01');

insert into musicstyle(libelle_musicstyle) values
('Rock'),
('Jazz'),
('Pop'),
('Classique'),
('Electro'),
('Autre');

insert into makes (id_artist, id_musicstyle) values
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2);

insert into typeprestataire(libelle_typeprestataire) values
('Photographe'),
('Vidéaste'),
('Autre');

insert into prestataire(libelle_prestataire, id_typeprestataire) values
('prestataire1', 1),
('prestataire2', 1),
('prestataire3', 2),
('prestataire4', 2),
('prestataire5', 3),
('prestataire6', 3);

insert into propose (id_prestataire, id_service) values
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3);

insert into socialnetwork(libelle_socialnetwork) values
('Facebook'),
('Twitter'),
('Instagram'),
('Snapchat'),
('Autre');