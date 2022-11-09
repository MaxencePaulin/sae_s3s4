# SAE_S3S4

## Installation

Supprimer le dossier `node_modules` et le fichier `package-lock.json` si ils existent.

Commandes à exécuter pour installer le projet :

```bash
npm i 
npm run start || npm run start:dev
```

Creer un fichier .env à la racine du projet et y ajouter les variables d'environnement suivantes :

```
PORT=XXXX
JWT_SECRET=XXXX(la notre dans le discord)
PG_USER=XXXX
PG_HOST=XXXX
PG_DATABASE=XXXX
PG_PASSWORD=XXXX
```

---

### Historique:

29/09/2022

- initialisation de GitHub

06/10/2022

- début de structure du projet

09/10/2022

- restructuration du projet et passage sous ECMAScript 6

10/10/2022

- mise en place des intéractions avec la base de données PostgreSQL
