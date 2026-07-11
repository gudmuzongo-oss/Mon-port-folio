===========================================================
PORTFOLIO PERSONNEL — Guy Muzongo
Projet final — Cours Développement Web (Semaine 6)
===========================================================

1. PRÉSENTATION
---------------
Portfolio personnel réalisé en Single Page Application (SPA) simplifiée :
une seule page HTML (site/index.html) contenant toutes les sections
(Hero, À propos, Compétences, Projets, Contact), reliées par une
navigation à ancres (#hero, #apropos, #competences, #projets, #contact).

2. STRUCTURE DU PROJET
-----------------------
portfolio-projet6/
  wireframe/
    prompts/            -> prompts Stitch v1 et v2
    exports_stitch/     -> descriptions des exports (voir prompts.md)
  figma/
    prototype_notes.md  -> interactions du prototype (6 minimum)
  site/
    index.html
    css/style.css
    js/app.js
    assets/images/
  README.txt (ce fichier)

3. COMMENT OUVRIR LE SITE
--------------------------
Ouvrir le fichier site/index.html dans un navigateur (double-clic),
ou publier via GitHub Pages (voir lien de publication ci-dessous
si activé).

4. FONCTIONNALITÉS
-------------------
- Navigation cohérente avec menu mobile (hamburger < 768px)
- 5 sections obligatoires : Hero, À propos, Compétences, Projets, Contact
- Formulaire de contact avec validation JavaScript (nom, email, message)
  + messages d'erreur accessibles (role="alert") + feedback de succès
- Responsive : mobile (< 768px), tablette (>= 768px), desktop (>= 1024px)
- HTML sémantique : header, nav, main, section, article, footer

===========================================================
5. SECTION QUALITÉ (obligatoire)
===========================================================

--- 5.1 ACCESSIBILITÉ (a11y) ---

Problème détecté : Les boutons de navigation mobile n'étaient pas
identifiables par un lecteur d'écran (bouton hamburger sans label).
Correction : ajout de aria-label="Ouvrir le menu de navigation",
aria-expanded et aria-controls sur le bouton toggle.
Résultat : le bouton est maintenant annoncé correctement et son état
(ouvert/fermé) est communiqué aux technologies d'assistance.

Problème détecté : Les messages d'erreur du formulaire n'étaient pas
annoncés automatiquement par les lecteurs d'écran.
Correction : ajout de role="alert" sur chaque span d'erreur et
aria-describedby reliant chaque champ à son message d'erreur.
Résultat : les erreurs sont lues automatiquement dès leur apparition.

Problème détecté : Une seule balise <h1> devait être présente par
page — risque de doublon avec les titres de section.
Correction : vérification manuelle, un seul <h1> (Hero), puis <h2>
pour chaque section, <h3> pour les sous-blocs (compétences, projets).
Résultat : hiérarchie de titres cohérente et validée.

--- 5.2 PERFORMANCE ---

Problème détecté : Une photo de profil en PNG/JPEG haute résolution
alourdissait inutilement la page pour un simple avatar.
Correction : remplacement par une image vectorielle SVG
(profile-placeholder.svg, < 1 Ko) plutôt qu'une image bitmap.
Résultat : poids de la ressource divisé par plus de 50x par rapport
à une photo JPEG classique, sans perte de netteté (vectoriel).

Problème détecté : Le script JavaScript bloquait potentiellement le
rendu de la page s'il était chargé dans le <head>.
Correction : attribut "defer" ajouté sur la balise <script>, placée
juste avant </body>.
Résultat : le HTML se charge et s'affiche sans attendre le JS.

Problème détecté : Risque de multiplier les fichiers CSS.
Correction : un seul fichier style.css regroupant l'ensemble des
règles (pas de CSS dupliqué entre sections).
Résultat : une seule requête HTTP pour tout le style.

--- 5.3 CORRECTIONS / ROBUSTESSE ---

Problème détecté : Le formulaire pouvait être soumis avec des champs
vides ou un email invalide (aucun contrôle initial).
Correction : validation JavaScript complète (longueur du nom,
regex email, longueur minimale du message) avec retour visuel
(bordure rouge + message) et retour positif après correction.
Résultat : impossible de soumettre le formulaire avec des données
invalides ; testé avec champs vides, email sans "@", message court.

Problème détecté : Le menu mobile restait ouvert après un clic sur
un lien d'ancre, cachant la section visée.
Correction : ajout d'un event listener qui referme le menu
automatiquement après le clic sur un lien.
Résultat : navigation mobile fluide, aucune section masquée.

Vérification console (F12) : aucune erreur JavaScript après tests
sur Chrome et Firefox.

--- 5.4 ÉCOCONCEPTION ---

- Une seule police système (pas de web font externe chargée) :
  réduction du nombre de requêtes réseau et du poids total.
- Image de profil en SVG plutôt qu'en bitmap (voir 5.2).
- Pas de bibliothèque JavaScript externe (jQuery, frameworks) :
  JavaScript natif (vanilla JS) uniquement, code minimal.
- Pas d'animations lourdes ni d'ombres portées excessives.
- Estimation du poids total de la page (HTML+CSS+JS+SVG) : < 20 Ko,
  hors éventuelles images de projets ajoutées par l'utilisateur.

===========================================================
6. CHECKLIST FINALE
===========================================================
[x] Navigation cohérente sur toutes les sections (ancres)
[x] 5 sections obligatoires présentes
[x] Formulaire de contact + validation JavaScript
[x] Responsive (mobile / tablette / desktop, 2 breakpoints)
[x] HTML sémantique (header, nav, main, section, article, footer)
[x] Accessibilité de base (labels, alt, aria, focus visible)
[x] Aucune erreur console
[x] Section Qualité documentée (a11y, performance, corrections, écoconception)

Auteur : Gudule Muzongo
