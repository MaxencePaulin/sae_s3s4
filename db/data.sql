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

