insert into nationality(libelle_nationality)values
('Algerian'),
('American'),
('Argentinian'),
('Australian'),
('Austrian'),
('Belgian'),
('Bolivian'),
('Brazilian'),
('British'),
('Bulgarian'),
('Canadian'),
('Chilean'),
('Chinese'),
('Colombian'),
('Croatian'),
('Cuban'),
('Czech'),
('Danish'),
('Dutch'),
('Ecuadorian'),
('Egyptian'),
('English'),
('Estonian'),
('Finnish'),
('French'),
('German'),
('Greek'),
('Guatemalan'),
('Haitian'),
('Honduran'),
('Hungarian'),
('Icelandic'),
('Indian'),
('Indonesian'),
('Iranian'),
('Irish'),
('Israeli'),
('Italian'),
('Japanese'),
('Jordanian'),
('Kazakh'),
('Kenyan'),
('Korean'),
('Latvian'),
('Lithuanian'),
('Luxembourgish'),
('Malaysian'),
('Mexican'),
('Mongolian'),
('Moroccan'),
('New Zealand'),
('Nicaraguan'),
('Norwegian'),
('Pakistani'),
('Panamanian'),
('Paraguayan'),
('Peruvian'),
('Polish'),
('Portuguese'),
('Romanian'),
('Russian'),
('Saudi Arabian'),
('Scottish'),
('Serbian'),
('Singaporean'),
('Slovak'),
('Slovenian'),
('South African'),
('Spanish'),
('Swedish'),
('Swiss'),
('Taiwanese'),
('Thai'),
('Tunisian'),
('Turkish'),
('Ukrainian'),
('Uruguayan'),
('Venezuelan'),
('Vietnamese'),
('Welsh');

insert into musicstyle(libelle_musicstyle)values
('rock'),
('pop'),
('rap'),
('jazz');

insert into socialnetwork(libelle_socialnetwork,page_socialnetwork) values
('facebook', 'https://www.facebook.com/'),
('twitter', 'https://twitter.com/'),
('instagram', 'https://www.instagram.com/'),
('youtube', 'https://www.youtube.com/'),
('soundcloud', 'https://soundcloud.com/'),
('bandcamp', 'https://bandcamp.com/'),
('spotify', 'https://open.spotify.com/');

insert into typescene(libelle_typescene)values
('exterieur'),
('interieur'),
('hybride');

insert into role(libelle_role) values
('utilisateur'),
('prestataire'),
('administrateur');

insert into typeprestataire(libelle_typeprestataire)values
('restauration'),
('boisson'),
('boutique'),
('hotel'),
('autre');

insert into service(libelle_service)values
('restauration'),
('buvette'),
('Achat de goodies'),
('hébergement'),
('autre');

insert into qr_code(qr_code)values
('qr_code1'),
('qr_code2');

insert into virtualaccount(amount,id_qr_code) values
(0, 1),
(100, 2);

insert into droit(libelle_droit) values
('read'),
('create'),
('update'),
('delete');

insert into date_validity_ticket(date_start_validity, date_end_validity) values
('2019-01-01', '2019-12-31'),
('2020-01-01', '2020-12-31'),
('2021-01-01', '2021-12-31'),
('2022-01-01', '2022-12-31'),
('2023-01-01', '2023-12-31'),
('2024-01-01', '2024-12-31');

insert into price(normal_price,reduc_price)values
(10, 5),
(20, 10),
(30, 15),
(40, null),
(50, null),
(60, 30),
(70, 35),
(80, 40),
(90, 45),
(100, 50);

insert into place (no_place)values
('37B'),
('38A'),
('15C'),
('15A'),
('15B');

insert into date_reserve(date_start_placereserved,date_end_placereserved)values
('2020-01-01','2020-12-31'),
('2021-01-01','2021-12-31'),
('2022-01-01','2022-12-31'),
('2023-01-01','2023-12-31');

insert into artist(name, image, biography, genre) values
('Johnny', 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Johnny_Hallyday_avp_2014_%28cropped%29.jpg', 'chanteur...', 'Homme'),
('Billie', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/BillieEilishO2160622_%2819_of_45%29_%2852153214339%29_%28cropped_2%29.jpg', 'chanteuse...', 'Femme');

insert into scene(libelle_scene,id_typescene)values
('scene 1',1),
('scene 2',2),
('scene 3',3),
('scene 4',1),
('scene 5',2);

insert into prestataire(libelle_prestataire,id_typeprestataire)values
('prestataire1 (son nom) de service',1),
('prestatair2 (son nom) de logement',2),
('prestatair3 (son nom) de transport',3),
('prestatair4 (son nom) de restauration',4),
('prestataire5 (son nom) de boisson',5);

insert into ticket(type_ticket,id_price) values
('1 jour', 1),
('2 jours', 2),
('3 jours', 3);

insert into users(login,password,email,firstname,lastname,dob,bankcard,address,mobile,genre,id_role,id_virtualaccount) values
('admin', 'password','admin1@gmail.com','firstname1', 'lastname1', '2019-01-01', null, null, '0605040302', 'homme',3, 1),
('admin', 'password','admin2@gmail.com','firstname2', 'lastname2', '2019-01-02', null, 'address2', null, 'femme',3 ,2);

insert into origineartist(id_artist, id_nationality)values
(1,1),
(2,2);

insert into make(id_artist,id_musicstyle)values
(1,1),
(2,2);

insert into have(id_artist,id_socialnetwork)values
(1,1),
(2,2);
insert into concert(id_artist,id_scene,date_concert)values
(1,1,'2020-01-01'),
(2,2,'2021-01-02');

insert into origineuser(id_nationality,id_user)values
(1,1),
(2,2);

insert into proposes(id_prestataire, id_service) values
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(4, 1),
(4, 2),
(4, 3);

insert into access(id_role, id_droit) values
(1, 1),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(3, 4);

insert into bought (id_user,id_ticket,date_start_validity,date_end_validity)values
(1,1,'2019-01-01','2019-12-31'),
(1,2,'2020-01-01','2020-12-31'),
(1,3,'2021-01-01','2021-12-31'),
(1,3,'2022-01-01','2022-12-31'),
(2,1,'2023-01-01','2023-12-31'),
(2,2,'2024-01-01','2024-12-31');

insert into date_reserve(date_start_placereserved, date_end_placereserved)values
('2019-01-01', '2019-12-31'),
('2010-01-01', '2019-12-31'),
('2011-01-01', '2019-12-31'),
('2012-01-01', '2019-12-31');

insert into reserve (id_user,id_place,date_start_placereserved,date_end_placereserved)values
(1,2,'2020-01-01','2020-12-31'),
(1,3,'2021-01-01','2021-12-31'),
(1,4,'2022-01-01','2022-12-31'),
(2,1,'2023-01-01','2023-12-31');










