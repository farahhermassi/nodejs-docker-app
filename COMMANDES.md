# Commandes utilisées

## Partie 1
- `docker --version` : version de Docker
- `docker compose version` : version de Compose
- `docker info` : informations système du daemon
- `docker run hello-world` : conteneur de test

## Partie 2
- `cat > package.json / app.js / Dockerfile / .dockerignore` : création des fichiers à la main (npm non installé)

## Partie 3
- `docker build -t nodejs-docker-app:1.0 .` : construire l'image
- `docker images` : lister les images
- `docker history nodejs-docker-app:1.0` : couches de l'image

## Partie 4
- `docker run -d -p 3000:3000 --name nodejs-app nodejs-docker-app:1.0` : lancer le conteneur
- `docker ps` / `docker ps -a` : conteneurs en cours / tous
- `docker logs nodejs-app` : logs
- `docker exec -it nodejs-app sh` : shell dans le conteneur
- `docker stop` / `docker start` / `docker rm nodejs-app` : arrêter, démarrer, supprimer

## Partie 5
- `docker login` : connexion à Docker Hub
- `docker tag nodejs-docker-app:1.0 marzoukijihed/nodejs-docker-app:1.0` : tagguer l'image
- `docker push marzoukijihed/nodejs-docker-app:1.0` : publier
- `docker rmi ...` : supprimer les images locales
- `docker pull farahhermassi/nodejs-docker-app:1.0` : récupérer l'image

## Partie 6
- `docker compose config` : valider et afficher la configuration
- `docker compose up -d --build` : construire et démarrer la stack
- `docker compose ps` : état des services
- `docker compose logs -f app` : logs du service app
- `docker compose exec mongo mongosh myapp --eval "db.visits.countDocuments()"` : compter les visites
- `docker network ls` / `docker volume ls` : réseaux et volumes
- `docker compose down` : arrêter et supprimer conteneurs et réseau (volume conservé)
- `docker compose down -v` : idem, avec suppression du volume
