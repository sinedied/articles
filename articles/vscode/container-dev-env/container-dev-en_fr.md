Un environnement de dev propre et toujours à jour grace aux conteneurs et VS Code

Parmi les choses qui me font perdre le plus de temps en tant que dev et qui deviennent facilement source de frustration, en voici trois:

-	Installer sa machine
-	Mettre à jour son environnement de dev
-	Réinstaller sa machine, parce qu'à forcer d'installer et mettre à jour ses outils de dev, plus rien ne marche :-(

Et si je vous disais qu'on peut s'éviter tous ces problèmes, et avoir un environment dev isolé pour chacun de vos projets, partageable au sein d'une équipe, et qui se met à jour facilement, ca vous tente?
C'est maintenant possible avec l'extension Remote Development Extension  pour VS Code, téléchargeable à l’adresse https://aka.ms/vscode/remote-dev, qui va vous permettre de configurer votre environnement de dev dans un conteneur. Dans cet article, nous verrons en détail sa mise en place sur un projet et les avantages associés.

Pourquoi développer dans un container

Dans chaque projet logiciel, l’histoire d’un nouveau développeur rejoignant l’équipe est (presque) toujours la même :

-	« Salut, bienvenue dans l’équipe ! On est ravi de t’avoir avec nous ! »
-	(Un peu plus tard, après les présentations de rigueur) « Voilà la doc pour installer ton environnement pour le projet. Quand tu seras prêt à attaquer, fais-nous signe ! »

Bon parfois, la doc n’existe pas, et ce seront vos collègues qui vous diront quoi installer. Très probablement, quelques heures (ou jours) plus tard, la suite de l’histoire est la suivante :

-	« A l’aide, je ne comprends toujours pas pourquoi le projet ne veut pas compiler et se lancer ! »

J’ai été ce développeur, plus d’une fois déjà. Après avoir revu tout ce qui a été installé, on découvre en général l’un ou plusieurs des problèmes suivants :

-	La doc d’installation n’est pas à jour (étonnant, non ?). Ce n’est pas justement le boulot du nouvel arrivant de la mettre à jour ?
-	Vous avez installé les bons outils, mais pas exactement la bonne version. « Désolé, on a oublié de te dire qu’il faut absolument la version 3.1.16.beta2 de la base de données, on a quelques soucis dans le code. »
-	Votre environnement existant configuré pour d’autres projets rentre en conflit avec votre nouvelle installation.

Ces problèmes, on les connait bien puisque ce sont exactement les mêmes que l’on peut avoir lors de la mise en production de nos applications. La bonne nouvelle, c’est qu’on sait très bien les résoudre en packageant l’environnement d’exécution dans des conteneurs, à l’aide par exemple de Docker. Dans ce cas, on pourrait mettre en place la même chose pour notre environnement de dev, non ? C’est exactement ce qu’on va faire !

Mise en place sur un projet

Vous aurez besoin de ces outils installés sur votre machine pour pouvoir démarrer : Visual Studio Code, Docker et l’extension Remote Development. Ouvrez un projet existant dans VS Code (ou créez en un nouveau), et cliquez ensuite sur l’icône en bas à gauche :

 
Activation de l’extension dans VS Code

Ensuite, sélectionnez Add Development Container Configuration Files, et vous allez avoir une liste d’environnements de départ qui va s’afficher.

 
Création d’un nouvel environnement de dev dans un projet

Il existe des configurations préconstruites pour Node.js, Java, .Net, Go, Python et autres, vous en trouverez une à coup sûr qui pourra servir de point de départ pour votre projet. Après avoir fait votre choix, vous verrez apparaître un nouveau dossier .devcontainer, qui contient deux fichiers :

 
Dossier contenant la configuration de l’environnement de dev

On va regarder en détail ces fichiers juste après, mais d’abord on va recharger notre projet pour travailler cette fois dans notre conteneur de dev.

Cliquez une nouvelle fois sur l’icône en bas à gauche dans VS Code, et sélectionnez cette fois Reopen in container.

VS Code va recharger la fenêtre de votre projet et construire le conteneur, ce qui peut prendre quelques minutes au premier lancement. Par la suite, le chargement sera quasi-instantané. Une fois terminé, vous pourrez constater que VS Code est connecté à votre conteneur de dev via la barre de statut.

 
VS Code connecté à un container de dev Node.js

Vous pouvez maintenant ouvrir un terminal et utiliser votre nouvel environnement de dev ! Dans mon exemple, j’ai configuré mon environnement pour utiliser Node.js en version 14. Notez que si maintenant tous mes outils de dev sont bien isolés dans mon conteneur, le code source du projet ne s’y trouve pas : il reste stocké directement sur ma machine, et connecté au container via un volume. Il n’y a donc aucun risque de perdre des données si le conteneur est détruit.

Personnalisation de l’environnement de dev

Maintenant que vous avez un environnement de travail de base, vous voudrez certainement le compléter pour les besoins spécifiques de votre projet. Si vous dépliez le dossier .devcontainer dans l'explorateur, vous verrez ces deux fichiers qui vous permettront de le faire:

-	Dockerfile : ce fichier spécifie la configuration de votre conteneur et permet de construire l'image qui sera utilisée pour votre environnement. C’est un fichier d’image Docker classique. Si vous devez installer des outils supplémentaires ou configurer des variables de scripts et d'environnement pour votre environnement de développement, c'est ici qu’il faut le faire.

-	devcontainer.json : ce fichier permet de personnaliser VS Code lorsque le projet est connecté au conteneur de dev. En particulier, il vous permet de changer les paramètres de VS Code, ajouter des extensions à installer automatiquement, configurer des redirections de port ou encore exécuter des commandes au démarrage du conteneur.

Regardons maintenant plus en détail comment personnaliser votre environnement de dev sous VS Code en modifiant le fichier devcontainer.json.

Sous la clé settings, vous devriez voir quelque chose comme cela :

 

Cette clé vous permet de surcharger n’importe quel paramètre de VS Code lorsque celui-ci est connecté au conteneur. Par exemple, si vous travaillez sous Windows et que votre terminal par défaut est PowerShell, en vous connectant au conteneur de dev le paramètre ci-dessus va changer votre terminal par défaut par Bash, qui sera exécuté dans le système Linux du conteneur. Grace à ces paramètres, vous pouvez définir un formateur de code commun à l’équipe ou forcer la signature des commits par exemple.

Une autre option très utile se trouve sous la clé extensions :

 

Celle-ci va vous permettre de définir une liste d’extensions qui seront installées automatiquement dans le conteneur lors de son premier lancement. Oui, vous avez bien lu : ces extensions ne viendront pas polluer votre configuration VS Code globale, car elles seront disponibles uniquement lorsque le conteneur sera lancé et connecté à votre projet. Plus besoin de jongler avec les extensions selon le projet, fini l’extension C# qui ne sert à rien sur votre projet Java !

Une dernière option indispensable, forwardPorts, va vous permettre de rendre des ports disponibles à l’intérieur de votre conteneur, accessibles par défaut depuis votre machine locale. 

 

Par exemple, si vous lancez un serveur dans un conteneur, sans transfert de ports il ne sera pas possible d’y accéder depuis votre navigateur. A noter qu’il est possible de rajouter des ports à transférer à la volée en cliquant sur l’icône d’antenne dans la barre de statut, puis en sélectionnant Add Port :
 
Le panneau de transfert de port dans VS Code

Partage et mise à jour de l’environnement

Une fois la configuration du conteneur et de VS Code terminée, il ne vous reste plus qu’à pousser ces deux fichiers dans votre dépôt de code, pour que toute votre équipe puisse en profiter. Et c’est bien là que se trouve l’un des gros avantages de cette approche : pour accueillir un nouveau développeur, il lui suffit désormais de cloner le projet et de recharger son VS Code pour utiliser le conteneur. Le temps d’un café (ou plusieurs selon la vitesse de connexion), il aura un environnement de dev tout prêt pour travailler, sans effort. Encore mieux, si vous mettez à jour la configuration en changeant la version d’un outil par exemple, vos collègues verront cette notification :

 

Il leur suffira de cliquer sur Rebuild pour mettre leur environnement à jour. Fini les retours de vacances difficiles ou plus rien ne marche !

Pour aller plus loin

Cet article n’offre qu’un bref aperçu de ce qu’il est possible de faire avec ces outils, et on peut bien évidemment pousser un peu plus au besoin, comme configurer un environnement de dev à base de plusieurs conteneurs. Je vous invite à regarder la documentation à cette adresse pour les scénarios plus avancés : aka.ms/remote-dev-ext/advanced.

Et si vous voulez faire un bond dans le futur, jetez un œil à GitHub Codespaces, qui vous proposera bientôt tout cela… directement depuis votre navigateur, sans rien avoir à installer sur votre machine !


Yohan Lasorsa
Senior Cloud Advocate @ Microsoft 
