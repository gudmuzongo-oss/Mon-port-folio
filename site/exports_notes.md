# Exports Wireframe — Notes

Deux versions de wireframe ont été produites à partir des prompts v1 et v2
(voir wireframe/prompts/prompts.md), chacune déclinée en desktop et mobile.

## Export v1 (desktop + mobile)
- Structure en blocs bruts : header, hero, à propos, compétences, projets,
  contact, footer, empilés verticalement.
- Aucune hiérarchie de couleur précisée, blocs gris uniquement.

## Export v2 (desktop + mobile) — retenu pour le développement
- Header sticky avec logo à gauche, menu à droite (desktop) / hamburger
  (mobile).
- Hero centré avec titre, sous-titre et bouton d'action.
- À propos : photo + texte côte à côte en desktop, empilés en mobile.
- Compétences : 2 colonnes en desktop, 1 colonne en mobile, barres de
  niveau horizontales.
- Projets : grille de 3 cartes en desktop, empilées en mobile.
- Contact : formulaire 2 colonnes (nom/email) en desktop, 1 colonne en
  mobile, zone message pleine largeur, bouton envoyer + zone de feedback.

Le site final (site/index.html + site/css/style.css) suit fidèlement
cette structure v2, avec les 2 breakpoints (768px, 1024px) correspondant
aux versions desktop/mobile du wireframe.
