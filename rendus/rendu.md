# Informations sur le rendu :

## Installation :

```bash
npm i
```

Veuilliez créer un fichier `.env` à la racine du projet et y ajouter les variables d'environnement suivantes :

```
PORT=3000
JWT_SECRET=675CF7W5YaM8V56WLkkc8W6mS72dxwb2iNNhupAa3jCsv9PAu63V5G7Q2mBg
PG_USER=XXXX (votre login de connexion à la base de données)
PG_HOST=XXXX (votre serveur de connexion à la base de données)
PG_DATABASE=XXXX (votre base donnée de connexion à la base de données)
PG_PASSWORD=XXXX (votre mot de passe de connexion à la base de données)
```

Veuillez créer les tables en éxecutant ce script SQL dans votre base de données se trouvant ici : 

/rendus/SQL/db.sql

Et y ajouter les données de test en éxecutant celui-ci :

/rendus/SQL/data.sql

Ensuite vous pouvez tout simplement lancer le serveur (en premier par rapport au front end) avec la commande :

```bash
npm run start
```
ou avec nodemon :
```bash
npm run start:dev
```

Les répertoires rendus/MCD_MR, rendus/MAQUETTES et rendus/STORY contiennent tous un fichier .md nécéssaire à leurs compréhension.

