drop table if exists procede;
drop table if exists permet;
drop table if exists reserve;
drop table if exists achete;
drop table if exists billet;
drop table if exists users;
drop table if exists date_validite_billet;
drop table if exists date_achat;
drop table if exists genre;
drop table if exists nationalite;
drop table if exists date_reservation;
drop table if exists prix;
drop table if exists banqueVirtuelle;
drop table if exists Achat;
drop table if exists qr_code;
drop table if exists ROLES;
drop table if exists emplacement;
drop table if exists droit;

CREATE TABLE if not exists droit(
    id_droit serial,
    libelle_droit VARCHAR(50),
    PRIMARY KEY(id_droit)
);

CREATE TABLE if not exists emplacement(
    id_emplacement serial,
    numero_emplacement VARCHAR(50), -- accent a enlever dans le mcd
    PRIMARY KEY(id_emplacement)
);

CREATE TABLE if not exists ROLES(
    id_role serial,
    libelle_role VARCHAR(50),
    category VARCHAR(50),
    PRIMARY KEY(id_role)
);

CREATE TABLE if not exists qr_code(
    id_QR_code serial,
    QR_code VARCHAR(50),
    PRIMARY KEY(id_QR_code)
);

CREATE TABLE if not exists Achat(
    id_achat serial,
    prix NUMERIC(15,2),
    nom_achat VARCHAR(50),
    PRIMARY KEY(id_achat)
);

CREATE TABLE if not exists banqueVirtuelle(
    id_banqueVirtuelle serial,
    argent NUMERIC(15,2),
    PRIMARY KEY(id_banqueVirtuelle)
);

CREATE TABLE if not exists prix(
    no_prix serial,
    prix_normal NUMERIC(15,2),
    reduction NUMERIC(15,2),
    PRIMARY KEY(no_prix)
);

CREATE TABLE if not exists date_reservation(
    date_debut_emplacement DATE,
    date_fin_emplacement DATE,
    PRIMARY KEY(date_debut_emplacement, date_fin_emplacement)
);

CREATE TABLE if not exists nationalite(
    id_nationalite serial,
    nom_nationalite VARCHAR(50),
    PRIMARY KEY(id_nationalite)
);

CREATE TABLE if not exists genre(
    id_genre serial,
    nom_genre VARCHAR(50),
    PRIMARY KEY(id_genre)
);

CREATE TABLE if not exists date_achat(
    date_achat DATE,
    PRIMARY KEY(date_achat)
);

CREATE TABLE if not exists date_validite_billet(
    date_debut_valide DATE,
    date_fin_valide DATE,
    PRIMARY KEY(date_debut_valide, date_fin_valide)
);

CREATE TABLE if not exists users(
    id_user serial,
    login VARCHAR(50), -- a changer dans le mcd
    password VARCHAR(255), -- a changer dans le mcd car sera stocker HASHER
    email VARCHAR(50), -- a changer dans le mcd
    prenom VARCHAR(50),
    nom VARCHAR(50),
    date_naissance DATE,
    carte_banquairre VARCHAR(50),
    adresse VARCHAR(50),
    mobile VARCHAR(10),
    id_banqueVirtuelle int,
    id_genre INT,
    id_nationalite INT,
    id_QR_code INT,
    id_role INT DEFAULT 1,
    PRIMARY KEY(id_user),
    UNIQUE(id_banqueVirtuelle),
    UNIQUE(id_QR_code),
    constraint fk_banqueVirtuelle_users
    FOREIGN KEY(id_banqueVirtuelle) REFERENCES banqueVirtuelle(id_banqueVirtuelle),
    constraint fk_genre_users
    FOREIGN KEY(id_genre) REFERENCES genre(id_genre),
    constraint fk_nationalite_users
    FOREIGN KEY(id_nationalite) REFERENCES nationalite(id_nationalite),
    constraint fk_QR_code_users
    FOREIGN KEY(id_QR_code) REFERENCES qr_code(id_QR_code),
    constraint fk_roles_users
    FOREIGN KEY(id_role) REFERENCES ROLES(id_role)
);

CREATE TABLE if not exists billet(
    id_billet serial,
    type_billet numeric(15,2),
    no_prix INT,
    PRIMARY KEY(id_billet),
    constraint fk_prix_billet
    FOREIGN KEY(no_prix) REFERENCES prix(no_prix)
);

CREATE TABLE if not exists achete(
    id_user INT,
    id_billet INT,
    date_debut_valide DATE,
    date_fin_valide DATE,
    PRIMARY KEY(id_user, id_billet, date_debut_valide, date_fin_valide),
    constraint fk_users_achete
    FOREIGN KEY(id_user) REFERENCES users(id_user),
    constraint fk_billet_achete
    FOREIGN KEY(id_billet) REFERENCES billet(id_billet),
    constraint fk_date_validite_billet_achete
    FOREIGN KEY(date_debut_valide, date_fin_valide) REFERENCES date_validite_billet(date_debut_valide, date_fin_valide)
);

CREATE TABLE if not exists reserve(
    id_user INT,
    id_emplacement INT,
    date_debut_emplacement DATE,
    date_fin_emplacement DATE,
    PRIMARY KEY(id_user, id_emplacement, date_debut_emplacement, date_fin_emplacement),
    constraint fk_users_reserve
    FOREIGN KEY(id_user) REFERENCES users(id_user),
    constraint fk_emplacement_reserve
    FOREIGN KEY(id_emplacement) REFERENCES emplacement(id_emplacement),
    constraint fk_date_reservation_reserve
    FOREIGN KEY(date_debut_emplacement, date_fin_emplacement) REFERENCES date_reservation(date_debut_emplacement, date_fin_emplacement)
);

CREATE TABLE if not exists permet(
    id_droit INT,
    id_role INT,
    PRIMARY KEY(id_droit, id_role),
    constraint fk_droit_permet
    FOREIGN KEY(id_droit) REFERENCES droit(id_droit),
    constraint fk_roles_permet
    FOREIGN KEY(id_role) REFERENCES ROLES(id_role)
);

CREATE TABLE if not exists procede(
    id_user INT,
    id_achat INT,
    date_achat DATE,
    PRIMARY KEY(id_user, id_achat, date_achat),
    constraint fk_users_procede
    FOREIGN KEY(id_user) REFERENCES users(id_user),
    constraint fk_achat_procede
    FOREIGN KEY(id_achat) REFERENCES Achat(id_achat),
    constraint fk_date_achat_procede
    FOREIGN KEY(date_achat) REFERENCES date_achat(date_achat)
);