# TP Docker / Docker Compose

Application Node.js (Express + MongoDB) conteneurisée avec Docker et Docker Compose.

Lancer : `docker compose up -d --build`, puis ouvrir http://localhost:3000/visits

Image Docker Hub : https://hub.docker.com/r/farahhermassi/nodejs-docker-app

## Questions 

**1. Différence entre une machine virtuelle et un conteneur ?**
Une VM embarque un système d'exploitation complet avec son propre noyau, au-dessus d'un hyperviseur : elle est lourde et lente à démarrer. Un conteneur partage le noyau de l'hôte et n'isole que l'application et ses dépendances : il est léger et démarre en quelques secondes.

**2. Différence entre une image et un conteneur ?**
L'image est un modèle en lecture seule (le « plan » de l'application). Le conteneur est une instance en cours d'exécution de cette image.

**3. À quoi sert le fichier .dockerignore ?**
Il exclut des fichiers du contexte de build (node_modules, .git, .env) : build plus rapide, image plus légère, et les secrets ne se retrouvent pas dans l'image.

**4. Qu'apporte Docker Compose par rapport à plusieurs docker run ?**
Un seul fichier déclaratif décrit toute la stack (services, réseau, volumes, variables). On la lance et on l'arrête en une commande, de façon reproductible, au lieu d'enchaîner plusieurs `docker run` avec de longues options.
