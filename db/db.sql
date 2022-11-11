-- drop table if exists procede;
-- drop table if exists permet;
-- drop table if exists reserve;
-- drop table if exists achete;
-- drop table if exists billet;
-- drop table if exists users;
-- drop table if exists date_validite_billet;
-- drop table if exists date_achat;
-- drop table if exists genre;
-- drop table if exists nationalite;
-- drop table if exists date_reservation;
-- drop table if exists prix;
-- drop table if exists banqueVirtuelle;
-- drop table if exists Achat;
-- drop table if exists qr_code;
-- drop table if exists ROLES;
-- drop table if exists emplacement;
-- drop table if exists droit;
--
-- CREATE TABLE if not exists droit(
--     id_droit serial,
--     libelle_droit VARCHAR(50),
--     PRIMARY KEY(id_droit)
-- );
--
-- CREATE TABLE if not exists emplacement(
--     id_emplacement serial,
--     numero_emplacement VARCHAR(50), -- accent a enlever dans le mcd
--     PRIMARY KEY(id_emplacement)
-- );
--
-- CREATE TABLE if not exists ROLES(
--     id_role serial,
--     libelle_role VARCHAR(50),
--     category VARCHAR(50),
--     PRIMARY KEY(id_role)
-- );
--
-- CREATE TABLE if not exists qr_code(
--     id_QR_code serial,
--     QR_code VARCHAR(50),
--     PRIMARY KEY(id_QR_code)
-- );
--
-- CREATE TABLE if not exists Achat(
--     id_achat serial,
--     prix NUMERIC(15,2),
--     nom_achat VARCHAR(50),
--     PRIMARY KEY(id_achat)
-- );
--
-- CREATE TABLE if not exists banqueVirtuelle(
--     id_banqueVirtuelle serial,
--     argent NUMERIC(15,2),
--     PRIMARY KEY(id_banqueVirtuelle)
-- );
--
-- CREATE TABLE if not exists prix(
--     no_prix serial,
--     prix_normal NUMERIC(15,2),
--     reduction NUMERIC(15,2),
--     PRIMARY KEY(no_prix)
-- );
--
-- CREATE TABLE if not exists date_reservation(
--     date_debut_emplacement DATE,
--     date_fin_emplacement DATE,
--     PRIMARY KEY(date_debut_emplacement, date_fin_emplacement)
-- );
--
-- CREATE TABLE if not exists nationalite(
--     id_nationalite serial,
--     nom_nationalite VARCHAR(50),
--     PRIMARY KEY(id_nationalite)
-- );
--
-- CREATE TABLE if not exists genre(
--     id_genre serial,
--     nom_genre VARCHAR(50),
--     PRIMARY KEY(id_genre)
-- );
--
-- CREATE TABLE if not exists date_achat(
--     date_achat DATE,
--     PRIMARY KEY(date_achat)
-- );
--
-- CREATE TABLE if not exists date_validite_billet(
--     date_debut_valide DATE,
--     date_fin_valide DATE,
--     PRIMARY KEY(date_debut_valide, date_fin_valide)
-- );
--
-- CREATE TABLE if not exists users(
--     id_user serial,
--     login VARCHAR(50), -- a changer dans le mcd
--     password VARCHAR(255), -- a changer dans le mcd car sera stocker HASHER
--     email VARCHAR(50), -- a changer dans le mcd
--     prenom VARCHAR(50),
--     nom VARCHAR(50),
--     date_naissance DATE,
--     carte_banquairre VARCHAR(50),
--     adresse VARCHAR(50),
--     mobile VARCHAR(10),
--     id_banqueVirtuelle int,
--     id_genre INT,
--     id_nationalite INT,
--     id_QR_code INT,
--     id_role INT DEFAULT 1,
--     PRIMARY KEY(id_user),
--     UNIQUE(id_banqueVirtuelle),
--     UNIQUE(id_QR_code),
--     constraint fk_banqueVirtuelle_users
--     FOREIGN KEY(id_banqueVirtuelle) REFERENCES banqueVirtuelle(id_banqueVirtuelle),
--     constraint fk_genre_users
--     FOREIGN KEY(id_genre) REFERENCES genre(id_genre),
--     constraint fk_nationalite_users
--     FOREIGN KEY(id_nationalite) REFERENCES nationalite(id_nationalite),
--     constraint fk_QR_code_users
--     FOREIGN KEY(id_QR_code) REFERENCES qr_code(id_QR_code),
--     constraint fk_roles_users
--     FOREIGN KEY(id_role) REFERENCES ROLES(id_role)
-- );
--
-- CREATE TABLE if not exists billet(
--     id_billet serial,
--     type_billet numeric(15,2),
--     no_prix INT,
--     PRIMARY KEY(id_billet),
--     constraint fk_prix_billet
--     FOREIGN KEY(no_prix) REFERENCES prix(no_prix)
-- );
--
-- CREATE TABLE if not exists achete(
--     id_user INT,
--     id_billet INT,
--     date_debut_valide DATE,
--     date_fin_valide DATE,
--     PRIMARY KEY(id_user, id_billet, date_debut_valide, date_fin_valide),
--     constraint fk_users_achete
--     FOREIGN KEY(id_user) REFERENCES users(id_user),
--     constraint fk_billet_achete
--     FOREIGN KEY(id_billet) REFERENCES billet(id_billet),
--     constraint fk_date_validite_billet_achete
--     FOREIGN KEY(date_debut_valide, date_fin_valide) REFERENCES date_validite_billet(date_debut_valide, date_fin_valide)
-- );
--
-- CREATE TABLE if not exists reserve(
--     id_user INT,
--     id_emplacement INT,
--     date_debut_emplacement DATE,
--     date_fin_emplacement DATE,
--     PRIMARY KEY(id_user, id_emplacement, date_debut_emplacement, date_fin_emplacement),
--     constraint fk_users_reserve
--     FOREIGN KEY(id_user) REFERENCES users(id_user),
--     constraint fk_emplacement_reserve
--     FOREIGN KEY(id_emplacement) REFERENCES emplacement(id_emplacement),
--     constraint fk_date_reservation_reserve
--     FOREIGN KEY(date_debut_emplacement, date_fin_emplacement) REFERENCES date_reservation(date_debut_emplacement, date_fin_emplacement)
-- );
--
-- CREATE TABLE if not exists permet(
--     id_droit INT,
--     id_role INT,
--     PRIMARY KEY(id_droit, id_role),
--     constraint fk_droit_permet
--     FOREIGN KEY(id_droit) REFERENCES droit(id_droit),
--     constraint fk_roles_permet
--     FOREIGN KEY(id_role) REFERENCES ROLES(id_role)
-- );
--
-- CREATE TABLE if not exists procede(
--     id_user INT,
--     id_achat INT,
--     date_achat DATE,
--     PRIMARY KEY(id_user, id_achat, date_achat),
--     constraint fk_users_procede
--     FOREIGN KEY(id_user) REFERENCES users(id_user),
--     constraint fk_achat_procede
--     FOREIGN KEY(id_achat) REFERENCES Achat(id_achat),
--     constraint fk_date_achat_procede
--     FOREIGN KEY(date_achat) REFERENCES date_achat(date_achat)
-- );

drop table if exists reserve;
drop table if exists bought;
drop table if exists access;
drop table if exists proposes;
drop table if exists origineuser;
drop table if exists concert;
drop table if exists do;
drop table if exists origineartist;
drop table if exists users;
drop table if exists ticket;
drop table if exists prestataire;
drop table if exists scene;
drop table if exists artist;
drop table if exists date_reserve;
drop table if exists place;
drop table if exists price;
drop table if exists date_validity_ticket;
drop table if exists droit;
drop table if exists qr_code;
drop table if exists virtualaccount;
drop table if exists service;
drop table if exists typeprestataire;
drop table if exists role;
drop table if exists genre;
drop table if exists typescene;
drop table if exists socialnetwork;
drop table if exists musicstyle;
drop table if exists nationality;

CREATE TABLE if not exists nationality(
    id_nationality serial,
    libelle_nationality VARCHAR(50),
    PRIMARY KEY(id_nationality)
);

CREATE TABLE if not exists musicstyle(
    id_musicstyle serial,
    libelle_musicstyle VARCHAR(50),
    PRIMARY KEY(id_musicstyle)
);

CREATE TABLE if not exists socialnetwork(
    id_socialnetwork serial,
    libelle_socialnetwork VARCHAR(50),
    page_socialnetwork VARCHAR(50),
    PRIMARY KEY(id_socialnetwork)
);

CREATE TABLE if not exists typescene(
    id_typescene serial,
    libelle_typescene VARCHAR(50),
    PRIMARY KEY(id_typescene)
);

CREATE TABLE if not exists genre(
    id_genre serial,
    libelle_genre VARCHAR(50),
    PRIMARY KEY(id_genre)
);

CREATE TABLE if not exists role(
    id_role serial,
    libelle_role VARCHAR(50),
    PRIMARY KEY(id_role)
);

CREATE TABLE if not exists typeprestataire(
    id_typeprestataire serial,
    libelle_typeprestataire VARCHAR(50),
    PRIMARY KEY(id_typeprestataire)
);

CREATE TABLE if not exists service(
    id_service serial,
    libelle_service VARCHAR(50),
    PRIMARY KEY(id_service)
);

CREATE TABLE if not exists virtualaccount(
    id_virtualaccount serial,
    amount numeric(15,2),
    PRIMARY KEY(id_virtualaccount)
);

CREATE TABLE if not exists qr_code(
    id_qr_code serial,
    qr_code TEXT,
    PRIMARY KEY(id_qr_code)
);

CREATE TABLE if not exists droit(
    id_droit serial,
    llibelle_droit VARCHAR(50),
    PRIMARY KEY(id_droit)
);

CREATE TABLE if not exists date_validity_ticket(
    date_start_validity DATE,
    date_end_validity DATE,
    PRIMARY KEY(date_start_validity, date_end_validity)
);

CREATE TABLE if not exists price(
    id_price serial,
    normal_price numeric(15,2),
    reduc_price numeric(15,2),
    PRIMARY KEY(id_price)
);

CREATE TABLE if not exists place(
    id_place serial,
    no_place INT,
    PRIMARY KEY(id_place)
);

CREATE TABLE if not exists date_reserve(
    date_start_placereserved DATE,
    date_end_placereserved DATE,
    PRIMARY KEY(date_start_placereserved, date_end_placereserved)
);

CREATE TABLE if not exists artist(
    id_artist serial,
    name VARCHAR(50),
    image VARCHAR(255),
    biography TEXT,
    id_genre INT NOT NULL,
    PRIMARY KEY(id_artist),
    constraint fk_genre_artist
    FOREIGN KEY(id_genre) REFERENCES genre(id_genre)
);

CREATE TABLE if not exists scene(
    id_scene serial,
    libelle_scene VARCHAR(50),
    id_typescene INT NOT NULL,
    PRIMARY KEY(id_scene),
    constraint fk_typescene_scene
    FOREIGN KEY(id_typescene) REFERENCES typescene(id_typescene)
);

CREATE TABLE if not exists prestataire(
    id_prestataire serial,
    libelle_prestataire VARCHAR(50),
    id_typeprestataire INT NOT NULL,
    PRIMARY KEY(id_prestataire),
    constraint fk_typeprestataire_prestataire
    FOREIGN KEY(id_typeprestataire) REFERENCES typeprestataire(id_typeprestataire)
);

CREATE TABLE if not exists ticket(
    id_ticket serial,
    type_ticket VARCHAR(50),
    id_price INT NOT NULL,
    PRIMARY KEY(id_ticket),
    constraint fk_price_ticket
    FOREIGN KEY(id_price) REFERENCES price(id_price)
);

CREATE TABLE if not exists users(
    id_user serial,
    login VARCHAR(50),
    password VARCHAR(255),
    email VARCHAR(50),
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    dob DATE,
    bankcard VARCHAR(50),
    address VARCHAR(50),
    mobile VARCHAR(10),
    id_role INT NOT NULL default 1,
    id_virtualaccount INT NOT NULL,
    id_prestataire INT,
    id_genre INT NOT NULL,
    PRIMARY KEY(id_user),
    UNIQUE(id_virtualaccount),
    constraint fk_role_user
    FOREIGN KEY(id_role) REFERENCES role(id_role),
    constraint fk_virtualaccount_user
    FOREIGN KEY(id_virtualaccount) REFERENCES virtualaccount(id_virtualaccount),
    constraint fk_prestataire_user
    FOREIGN KEY(id_prestataire) REFERENCES prestataire(id_prestataire),
    constraint fk_genre_user
    FOREIGN KEY(id_genre) REFERENCES genre(id_genre)
);

CREATE TABLE if not exists orgineartist(
    id_artist INT,
    id_nationality INT,
    PRIMARY KEY(id_artist, id_nationality),
    constraint fk_artist_orgineartist
    FOREIGN KEY(id_artist) REFERENCES artist(id_artist),
    constraint fk_nationalite_originartist
    FOREIGN KEY(id_nationality) REFERENCES nationality(id_nationality)
);

CREATE TABLE if not exists do(
    id_artist INT,
    id_musicstyle INT,
    PRIMARY KEY(id_artist, id_musicstyle),
    constraint fk_artist_do
    FOREIGN KEY(id_artist) REFERENCES artist(id_artist),
    constraint fk_musicstyle_do
    FOREIGN KEY(id_musicstyle) REFERENCES musicstyle(id_musicstyle)
);

CREATE TABLE if not exists have(
    id_artist INT,
    id_socialnetwork INT,
    PRIMARY KEY(id_artist, id_socialnetwork),
    constraint fk_artist_have
    FOREIGN KEY(id_artist) REFERENCES artist(id_artist),
    constraint fk_socialnetwork_have
    FOREIGN KEY(id_socialnetwork) REFERENCES socialnetwork(id_socialnetwork)
);

CREATE TABLE if not exists concert(
    id_artist INT,
    id_scene INT,
    PRIMARY KEY(id_artist, id_scene),
    constraint fk_artist_concert
    FOREIGN KEY(id_artist) REFERENCES artist(id_artist),
    constraint fk_scene_concert
    FOREIGN KEY(id_scene) REFERENCES scene(id_scene)
);

CREATE TABLE if not exists origineuser(
    id_nationality INT,
    id_user INT,
    PRIMARY KEY(id_nationality, id_user),
    constraint fk_nationalite_origineuser
    FOREIGN KEY(id_nationality) REFERENCES nationality(id_nationality),
    constraint fk_user_origineuser
    FOREIGN KEY(id_user) REFERENCES users(id_user)
);

CREATE TABLE if not exists proposes(
    id_prestataire INT,
    id_service INT,
    PRIMARY KEY(id_prestataire, id_service),
    constraint fk_prestataire_proposes
    FOREIGN KEY(id_prestataire) REFERENCES prestataire(id_prestataire),
    constraint fk_service_proposes
    FOREIGN KEY(id_service) REFERENCES service(id_service)
);

CREATE TABLE if not exists access(
    id_role INT,
    id_droit INT,
    PRIMARY KEY(id_role, id_droit),
    constraint fk_role_access
    FOREIGN KEY(id_role) REFERENCES role(id_role),
    constraint fk_droit_access
    FOREIGN KEY(id_droit) REFERENCES droit(id_droit)
);

CREATE TABLE if not exists bought(
    id_user INT,
    id_ticket INT,
    date_start_validity DATE,
    date_end_validity DATE,
    PRIMARY KEY(id_user, id_ticket, date_start_validity, date_end_validity),
    constraint fk_user_bought
    FOREIGN KEY(id_user) REFERENCES users(id_user),
    constraint fk_ticket_bought
    FOREIGN KEY(id_ticket) REFERENCES ticket(id_ticket),
    constraint fk_date_start_validity_bought
    FOREIGN KEY(date_start_validity, date_end_validity) REFERENCES date_validity_ticket(date_start_validity, date_end_validity)
);

CREATE TABLE if not exists reserve(
    id_user INT,
    id_place INT,
    date_start_placereserved DATE,
    date_end_placereserved DATE,
    PRIMARY KEY(id_user, id_place, date_start_placereserved, date_end_placereserved),
    constraint fk_user_reserve
    FOREIGN KEY(id_user) REFERENCES users(id_user),
    constraint fk_place_reserve
    FOREIGN KEY(id_place) REFERENCES place(id_place),
    constraint fk_date_start_placereserved_reserve
    FOREIGN KEY(date_start_placereserved, date_end_placereserved) REFERENCES date_reserve(date_start_placereserved, date_end_placereserved)
);
