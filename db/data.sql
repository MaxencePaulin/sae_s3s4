insert into nationalite (nom_nationalite) values
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

insert into roles (libelle_role, category) values
('Utilisateur', 'public'),
('Prestataire', 'Santé'),
('Prestataire', 'Sécurité'),
('Prestataire', 'Restauration'),
('Prestataire', 'Billetterie'),
('Prestataire', 'Communication'),
('Prestataire', 'Logistique'),
('Prestataire', 'Autre'),
('Administrateur', 'gérant');

insert into genre (nom_genre) values
('Homme'),
('Femme');

insert into banqueVirtuelle(argent) values
(0),
(0),
(0);

insert into QR_code(QR_code) values
('QR_code1'),
('QR_code2'),
('QR_code3');

insert into users (login, password, email, id_genre, id_nationalite, id_banqueVirtuelle, id_QR_code) values
('admin', 'admin', 'admin@gmail.com', 1, 1, 1, 1 ),
('user', 'user', 'user@gmail.com', 1, 2, 2, 2 ),
('guest', 'guest', 'guest@gmail.com', 2, 3, 3, 3 );

