# Portfolio Personnel — Guy Muzongo

Portfolio personnel développé en **HTML5, CSS3 et JavaScript vanilla**, sans framework ni dépendance externe. Conçu comme une Single Page Application (SPA) légère, mobile-first et accessible.

Démo en ligne : https://yuuggyy.github.io/portfolio-projet-final/site/index.html

## Stack technique

| Couche       | Technologie                          |
|--------------|---------------------------------------|
| Structure    | HTML5 sémantique (header, nav, main, section, article, footer) |
| Style        | CSS3 natif — Flexbox + CSS Grid, custom properties (variables CSS) |
| Interactivité| JavaScript vanilla (ES5/ES6), aucune librairie externe |
| Assets       | SVG (image de profil vectorielle, poids minimal) |
| Hébergement  | GitHub Pages (déploiement statique) |
| Contrôle de version | Git / GitHub |

Aucun build tool, bundler ou framework n'est utilisé volontairement : le but du projet est de démontrer une maîtrise des fondamentaux du web (HTML/CSS/JS purs) avant l'usage d'outils comme React ou Tailwind (utilisés par ailleurs sur mes projets pro, voir section Projets du site).

## Architecture

Le site est une SPA simplifiée à une seule page (`site/index.html`), structurée en sections identifiées par `id`, reliées à la navigation via des ancres (`#hero`, `#apropos`, `#competences`, `#projets`, `#contact`). Pas de routing JS : la navigation native du navigateur (scroll-to-anchor) gère les transitions, avec `scroll-behavior: smooth` en CSS.

```
site/
  index.html          -> structure complète, 5 sections + header/footer
  css/style.css        -> mobile-first, 2 breakpoints (768px, 1024px)
  js/app.js             -> menu mobile (toggle) + validation formulaire
  assets/images/        -> SVG (profile placeholder)
```

## Fonctionnalités clés

- *Responsive design* mobile-first avec 2 breakpoints (tablette 768px, desktop 1024px)
- *Menu de navigation* avec toggle hamburger sur mobile (JS + ARIA : `aria-expanded`, `aria-controls`)
- *Formulaire de contact* avec validation JavaScript côté client (regex email, longueur minimale, feedback visuel + accessible via `role="alert"` / `aria-live`)
- *Accessibilité* : hiérarchie de titres unique (un seul `<h1>`), labels associés aux champs, focus visible, contrastes conformes
- *Performance / écoconception* : une seule feuille de style, un seul script (chargé en `defer`), image vectorielle SVG plutôt que bitmap, aucune dépendance externe (pas de CDN, pas de web font)

## Lancer le projet en local

Aucune installation requise — c'est du HTML/CSS/JS statique.

```bash
git clone https://github.com/Yuuggyy/portfolio-projet-final.git
cd portfolio-projet-final/site
# ouvrir index.html directement dans un navigateur
# ou servir en local :
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080`.

## Documentation complémentaire

- `README.txt` — rapport qualité détaillé (accessibilité, performance, corrections, écoconception) rédigé dans le cadre du projet de cours.
- `wireframe/` — prompts et notes de conception (Stitch v1/v2).
- `figma/` — notes du prototype et liste des interactions.

## Auteur

Guy Muzongo — développeur web & mobile (React, Flutter, Supabase). Ce portfolio présente également mes projets professionnels : 416 (plateforme de streaming), MyRawApp (application bancaire IA), menu_3d (dashboard de gestion de commandes).
