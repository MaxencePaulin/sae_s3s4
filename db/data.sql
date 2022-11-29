insert into nationality(id_nationality,libelle_nationality)values
(1,'Algerian'),
(2,'American'),
(3,'Argentinian'),
(4,'Australian'),
(5,'Austrian'),
(6,'Belgian'),
(7,'Bolivian'),
(8,'Brazilian'),
(9,'British'),
(10,'Bulgarian'),
(11,'Canadian'),
(12,'Chilean'),
(13,'Chinese'),
(14,'Colombian'),
(15,'Croatian'),
(16,'Cuban'),
(17,'Czech'),
(18,'Danish'),
(19,'Dutch'),
(20,'Ecuadorian'),
(21,'Egyptian'),
(22,'English'),
(23,'Estonian'),
(24,'Finnish'),
(25,'French'),
(26,'German'),
(27,'Greek'),
(28,'Guatemalan'),
(29,'Haitian'),
(30,'Honduran'),
(31,'Hungarian'),
(32,'Icelandic'),
(33,'Indian'),
(34,'Indonesian'),
(35,'Iranian'),
(36,'Irish'),
(37,'Israeli'),
(38,'Italian'),
(39,'Japanese'),
(40,'Jordanian'),
(41,'Kazakh'),
(42,'Kenyan'),
(43,'Korean'),
(44,'Latvian'),
(45,'Lithuanian'),
(46,'Luxembourgish'),
(47,'Malaysian'),
(48,'Mexican'),
(49,'Mongolian'),
(50,'Moroccan'),
(51,'New Zealand'),
(52,'Nicaraguan'),
(53,'Norwegian'),
(54,'Pakistani'),
(55,'Panamanian'),
(56,'Paraguayan'),
(57,'Peruvian'),
(58,'Polish'),
(59,'Portuguese'),
(60,'Romanian'),
(61,'Russian'),
(62,'Saudi Arabian'),
(63,'Scottish'),
(64,'Serbian'),
(65,'Singaporean'),
(66,'Slovak'),
(67,'Slovenian'),
(68,'South African'),
(69,'Spanish'),
(70,'Swedish'),
(71,'Swiss'),
(72,'Taiwanese'),
(73,'Thai'),
(74,'Tunisian'),
(75,'Turkish'),
(76,'Ukrainian'),
(77,'Uruguayan'),
(78,'Venezuelan'),
(79,'Vietnamese'),
(80,'Welsh');

insert into typescene(id_typescene,libelle_typescene)values
(1,'exterieur'),
(2,'interieur'),
(3,'ouee');

insert into scene(id_scene,libelle_scene,id_typescene)values
(1,'scene 1',1),
(2,'scene 2',2),
(3,'scene 3',3),
(4,'scene 4',1),
(5,'scene 5',2),
(6,'scene 6',3),
(7,'scene 7',1),
(8,'scene 8',2),
(9,'scene 9',3),
(10,'scene 10',1),
(11,'scene 11',2),
(12,'scene 12',3);

insert into role(id_role, libelle_role) values
(1, 'user'),
(2, 'admin'),
(3, 'prestataire');

insert into droit(id_droit, libelle_droit) values
(1, 'create'),
(2, 'read'),
(3, 'update'),
(4, 'delete');

insert into access(id_role, id_droit) values
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(3, 3),
(3, 4);

insert into socialnetwork(id_socialnetwork, libelle_socialnetwork,page_socialnetwork) values
(1, 'facebook', 'https://www.facebook.com/'),
(2, 'twitter', 'https://twitter.com/'),
(3, 'instagram', 'https://www.instagram.com/'),
(4, 'youtube', 'https://www.youtube.com/'),
(5, 'soundcloud', 'https://soundcloud.com/'),
(6, 'bandcamp', 'https://bandcamp.com/'),
(7, 'spotify', 'https://open.spotify.com/');

insert into service(id_service,libelle_service)values
(1, 'restauration'),
(2, 'boisson'),
(3, 'boutique'),
(4, 'hotel'),
(5, 'autre');

insert into typeprestataire(id_typeprestataire,libelle_typeprestataire)values
(1, 'restauration'),
(2, 'boisson'),
(3, 'boutique'),
(4, 'hotel'),
(5, 'autre');

insert into prestataire(id_prestataire,libelle_prestataire,id_typeprestataire)values
(1, 'prestataire de service',1),
(2, 'prestataire de logement',2),
(3, 'prestataire de transport',3),
(4, 'prestataire de restauration',4),
(5, 'prestataire de boisson',5);

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

insert into price(id_price,normal_price,reduc_price)values
(1, 10, 5),
(2, 20, 10),
(3, 30, 15),
(4, 40, 20),
(5, 50, 25),
(6, 60, 30),
(7, 70, 35),
(8, 80, 40),
(9, 90, 45),
(10, 100, 50);


insert into ticket(id_ticket, type_ticket,id_price) values
(1, 'normal', 1),
(2, 'reduit', 2),
(3, 'gratuit', 3),
(4, 'normal', 4),
(5, 'reduit', 5),
(6, 'gratuit', 6),
(7, 'normal', 7),
(8, 'reduit', 8),
(9, 'gratuit', 9),
(10, 'normal', 10);

insert into date_validity_ticket(date_start_validity, date_end_validity) values
('2019-01-01', '2019-12-31'),
('2020-01-01', '2020-12-31'),
('2021-01-01', '2021-12-31'),
('2022-01-01', '2022-12-31'),
('2023-01-01', '2023-12-31'),
('2024-01-01', '2024-12-31');

insert into date_reserve(date_start_placereserved, date_end_placereserved)values
('2019-01-01', '2019-12-31'),
('2010-01-01', '2019-12-31'),
('2011-01-01', '2019-12-31'),
('2012-01-01', '2019-12-31');

insert into qr_code(id_qr_code,qr_code)values
(1, 'qr_code1'),
(2, 'qr_code2'),
(3, 'qr_code3'),
(4, 'qr_code4'),
(5, 'qr_code5'),
(6, 'qr_code6'),
(7, 'qr_code7'),
(8, 'qr_code8'),
(9, 'qr_code9'),
(10, 'qr_code10');

insert into virtualaccount(id_virtualaccount, amount,id_qr_code) values
(1, 0, 1),
(2, 0, 2),
(3, 0, 3),
(4, 0, 4),
(5, 0, 5);


insert into users(id_user,login,password,email,firstname,lastname,dob,bankcard,address,mobile,genre,id_role,id_virtualaccount,id_prestataire) values
(1, 'admin', 'password','user1@gmail.com','firstname1', 'lastname1', '2019-01-01', 'bankcard1', 'address1', 'mobile1', 'genre1',1, 1, 1),
(2, 'admin', 'password','user1@gmail.com','firstname1', 'lastname1', '2019-01-01', 'bankcard1', 'address1', 'mobile1', 'genre1',1 ,2, 2);

insert into bought (id_user,id_ticket,date_start_validity,date_end_validity)values
(1,1,'2019-01-01','2019-12-31'),
(1,2,'2020-01-01','2020-12-31'),
(1,3,'2021-01-01','2021-12-31'),
(1,4,'2022-01-01','2022-12-31'),
(2,1,'2023-01-01','2023-12-31'),
(2,2,'2024-01-01','2024-12-31');

insert into place (id_place,no_place)values
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

insert into date_reserve(date_start_placereserved,date_end_placereserved)values
('2020-01-01','2020-12-31'),
('2021-01-01','2021-12-31'),
('2022-01-01','2022-12-31'),
('2023-01-01','2023-12-31');

insert into reserve (id_user,id_place,date_start_placereserved,date_end_placereserved)values
(1,2,'2020-01-01','2020-12-31'),
(1,3,'2021-01-01','2021-12-31'),
(1,4,'2022-01-01','2022-12-31'),
(2,1,'2023-01-01','2023-12-31');

insert into origineuser(id_nationality,id_user)values
(1,1),
(2,2),
(3,3),
(4,4);

insert into concert(id_artist,id_scene,date_concert)values
(1,1,'2020-01-01'),
(2,2,'2021-01-01'),
(3,3,'2022-01-01'),
(4,4,'2023-01-01');

insert into have(id_artist,id_socialnetwork)values
(1,1),
(2,2),
(3,3),
(4,4);

insert into musicstyle(id_musicstyle,libelle_musicstyle)values
(1,'rock'),
(2,'pop'),
(3,'rap'),
(4,'jazz');

insert into make(id_artist,id_musicstyle)values
(1,1),
(2,2),
(3,3),
(4,4);

insert into origineartist(id_artist,id_nationality)values
(1,1),
(2,2),
(3,3),
(4,4);