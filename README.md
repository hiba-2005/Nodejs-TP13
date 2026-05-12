# TP 13 — Déploiement d'une Application Node.js en Production

## Description

Ce projet a été réalisé dans le cadre du TP 13 du cours de Développement Web Full-Stack avec JavaScript.

L’objectif est de mettre en place une application Node.js prête pour la production avec :

- Express.js
- Variables d’environnement
- PM2
- Mode Cluster
- GitHub
- GitHub Actions (CI/CD)
- Monitoring
- Scripts de sauvegarde et rollback

---

# Technologies utilisées

- Node.js
- Express.js
- PM2
- GitHub Actions
- Dotenv
- Helmet
- Cors

---

# Structure du projet

```bash
node-prod-api/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── index.html
│
├── routes/
│   └── api.js
│
├── index.js
├── ecosystem.config.js
├── package.json
├── .env
├── backup.sh
├── rollback.sh
└── README.md
```

---

# Installation du projet

## Cloner le projet

```bash
git clone https://github.com/hiba-2005/Nodejs-TP13.git
```

## Accéder au dossier

```bash
cd Nodejs-TP13
```

## Installer les dépendances

```bash
npm install
```

---

# Lancement du projet

## Mode développement

```bash
npm run dev
```

## Mode production avec PM2

```bash
pm2 start ecosystem.config.js
```

---

# Routes API

## Route principale

```txt
http://localhost:4000
```

## Health Check

```txt
http://localhost:4000/api/health
```

## Informations API

```txt
http://localhost:4000/api/info
```

---

# Configuration PM2

Le projet utilise PM2 en mode cluster pour améliorer les performances et la stabilité.

Commandes utiles :

```bash
pm2 status
pm2 logs
pm2 monit
pm2 restart node-prod-api
```

---

# GitHub Actions

Le projet utilise GitHub Actions pour automatiser :

- installation Node.js
- installation des dépendances
- vérification de l’application

Fichier :

```txt
.github/workflows/deploy.yml
```

---

# Sauvegarde

Le script `backup.sh` permet de créer des sauvegardes compressées du projet.

```bash
bash backup.sh
```

---

# Rollback

Le script `rollback.sh` permet de revenir à une ancienne version Git.

```bash
bash rollback.sh HASH_COMMIT
```

---

# Résultats obtenus

- Déploiement local simulé réussi
- Application Node.js fonctionnelle
- PM2 configuré en cluster
- Monitoring temps réel opérationnel
- Workflow GitHub Actions fonctionnel
- Gestion des logs active

  <img width="952" height="290" alt="c3994aad-ce2a-4981-b00a-0fe9929ebf6a" src="https://github.com/user-attachments/assets/bdfc8643-87e7-4597-b827-0f38b86e2556" />
<img width="959" height="451" alt="062a5ee4-b81a-4bf8-8079-674db3103879" src="https://github.com/user-attachments/assets/e535e593-f8ae-42a8-be36-cd6ccd89f603" />
<img width="958" height="440" alt="b2ea954f-1534-4dbe-8d7c-d65341df4722" src="https://github.com/user-attachments/assets/94204207-0d42-4a1b-85ed-69ada5d297ab" />
<img width="1048" height="879" alt="0bcff5bf-5260-448a-9ce2-16aa3cd3c293" src="https://github.com/user-attachments/assets/e9c742a1-b41e-46de-81cf-fb1915579c7b" />
<img width="1084" height="569" alt="363d94e7-b8b8-428b-9ed0-ef49fde73ec1" src="https://github.com/user-attachments/assets/9f1f8828-a10a-4065-90b7-44b2f1c7d74c" />
<img width="254" height="195" alt="ef75e8f9-4704-4019-ac4c-db2ff41c2231" src="https://github.com/user-attachments/assets/109c6505-8760-47f1-b719-4dcf6e0e2aee" />
<img width="1600" height="705" alt="efc5d00b-ecff-4d6e-9feb-d55beda640f1" src="https://github.com/user-attachments/assets/0465006b-6e42-4dcd-b128-fe3ce19241a5" />
<img width="1600" height="837" alt="41373678-fed3-451d-a9a6-d2f0cdfa2c77" src="https://github.com/user-attachments/assets/3c9136e8-0af6-4f13-8875-20130947c57a" />
<img width="1600" height="837" alt="b9b2ab57-7771-44a6-9067-4138c7dc17af" src="https://github.com/user-attachments/assets/bdab8c0c-3da9-4de8-b8c3-e784f454ca19" />
<img width="1919" height="804" alt="image" src="https://github.com/user-attachments/assets/6da88aa7-50f9-4c7c-9098-61b072857a29" />
<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/979875dc-dd51-4952-baa4-157e817f2d15" />
<img width="1906" height="778" alt="image" src="https://github.com/user-attachments/assets/c053036b-ceb7-4749-8035-80acbb28aa93" />
<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/883355a2-336d-4dfe-8fd5-47ea9e3b700f" />


---

# Conclusion

Ce TP a permis de comprendre les étapes essentielles du déploiement d’une application Node.js en production, notamment la gestion des processus avec PM2, l’automatisation CI/CD avec GitHub Actions ainsi que les mécanismes de supervision et de maintenance.

---
