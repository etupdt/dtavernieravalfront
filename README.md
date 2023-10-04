
## 04/10/2023

## Table Content

1. Informations Générales
2. Langage et Framework
3. installation
4. Mode d'emploi

## 1/ Informations Générales

Évaluation d'entraînement - Développer la partie front-end d’une application web

## 2/ Langage et Framework

- Maquettes : Réalisées avec Figma
- IDE : Visual Studio Code
- Langage : HTML, CSS, javascript
- Framework : React.Js
- Versionning : GitHub
- CMS : Decap CMS (anciennement Netlify CMS)
- Hébergeur : Netlify

## 3/ installation 

```
$ git clone https://github.com/etupdt/dtavernieravalfront.git
$ cd dtavernierevaljavascript
```

## 4/ Mode d'emploi :

Le site comprend une barre de navigation en haut de l"écran qui comprend, lui même, 5 onglets permettant d'accéder aux 5 pages du portfolio.

- Accueil : c'est la page qui s'affiche lorsqu'on arrive sur le site et qui donne le nom de l'auteur.
- Galerie : C'est la page d'affichage des photos qui compred une listBox de filtre par catégorie.
- Tarifs : Simple page d'affichage des tarifs.
- Contact : Formulaire de contact qui permet au visiteur de laisser un message et une adresse mail où il peut être contacté.
- Admin : C'est la page d'administration qui permet de saisr de nouvelles catégories et les photos associées. Elle s'ouvre dans un nouvel onglet du navigateur et permet de s'identifier pour arriver à l'interface. On peut y saisir :
  - Les catégories en sélectionnabt l'option du menu correspondante et en ajoutant la ou les catégories séparées par des virgules. On peut également en supprimer.
  - Les photos en les choisissant dans la médiathèque, qui permet elle même d'uploader de nouvelles photos. Les éléments ainsi séléctionnés doivent être publiés par le bouton éponyme. Ils sont alors visualisables dans la page Galerie du site.

Pour accéder à la page d'admin :

- accédez au site avec le lien du document pdf.
- cliquer sur l'onglet admin.
- cliquer sur "Login with Netlify Identity".
- si vous êtes déjà inscrit :
  - cliquez sur "Sign in".
  - saisissez votre mail, mot de passe et validez.
- sinon 
  - cliquez sur "Sign up".
  - Saisissez votre nom, email, mot de passe et validez.
  - Confirmez le mail que vous avez reçu.
- Vous êtes connecté et pouvez modifier le paramètrage.
