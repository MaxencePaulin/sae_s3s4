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
    id_nationalite INT,
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
    username VARCHAR(50), -- a changer dans le mcd
    mdp VARCHAR(50),
    mail VARCHAR(50),
    prenom VARCHAR(50),
    nom VARCHAR(50),
    date_naissance DATE,
    carte_banquairre VARCHAR(50),
    adresse VARCHAR(50),
    mobile VARCHAR(10),
    id_banqueVirtuelle INT NOT NULL,
    id_genre INT NOT NULL,
    id_nationalite INT NOT NULL,
    id_QR_code INT NOT NULL,
    id_role INT NOT NULL,
    PRIMARY KEY(id_user),
    UNIQUE(id_banqueVirtuelle),
    UNIQUE(id_QR_code),
    FOREIGN KEY(id_banqueVirtuelle) REFERENCES banqueVirtuelle(id_banqueVirtuelle),
    FOREIGN KEY(id_genre) REFERENCES genre(id_genre),
    FOREIGN KEY(id_nationalite) REFERENCES nationalite(id_nationalite),
    FOREIGN KEY(id_QR_code) REFERENCES qr_code(id_QR_code),
    FOREIGN KEY(id_role) REFERENCES ROLES(id_role)
);
--pas fini au dessus et en dessous
CREATE TABLE billet(
   id_billet INT,
   type_billet DECIMAL(15,2),
   no_prix INT NOT NULL,
   PRIMARY KEY(id_billet),
   FOREIGN KEY(no_prix) REFERENCES prix(no_prix)
);

CREATE TABLE achete(
   id_user INT,
   id_billet INT,
   date_debut_valide DATE,
   date_fin_valide DATE,
   PRIMARY KEY(id_user, id_billet, date_debut_valide, date_fin_valide),
   FOREIGN KEY(id_user) REFERENCES users(id_user),
   FOREIGN KEY(id_billet) REFERENCES billet(id_billet),
   FOREIGN KEY(date_debut_valide, date_fin_valide) REFERENCES date_validite_billet(date_debut_valide, date_fin_valide)
);

CREATE TABLE reserve(
   id_user INT,
   id_emplacement INT,
   date_debut_emplacement DATE,
   date_fin_emplacement DATE,
   PRIMARY KEY(id_user, id_emplacement, date_debut_emplacement, date_fin_emplacement),
   FOREIGN KEY(id_user) REFERENCES users(id_user),
   FOREIGN KEY(id_emplacement) REFERENCES emplacement(id_emplacement),
   FOREIGN KEY(date_debut_emplacement, date_fin_emplacement) REFERENCES date_reservation(date_debut_emplacement, date_fin_emplacement)
);

CREATE TABLE permet(
   id_droit INT,
   id_role INT,
   PRIMARY KEY(id_droit, id_role),
   FOREIGN KEY(id_droit) REFERENCES droit(id_droit),
   FOREIGN KEY(id_role) REFERENCES ROLES(id_role)
);

CREATE TABLE procede(
   id_user INT,
   id_achat INT,
   date_achat DATE,
   PRIMARY KEY(id_user, id_achat, date_achat),
   FOREIGN KEY(id_user) REFERENCES users(id_user),
   FOREIGN KEY(id_achat) REFERENCES Achat(id_achat),
   FOREIGN KEY(date_achat) REFERENCES date_achat(date_achat)
);