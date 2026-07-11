# Prompts Wireframe (Stitch)

## Prompt v1

Tu es designer UX. Génère un wireframe low-fidelity d'un portfolio personnel.
Écrans : Accueil (desktop+mobile) + Projets (desktop+mobile).
Sections : header/nav, hero (H1+CTA), à propos, compétences, projets (cartes), contact (form), footer.

## Prompt v2 (amélioré)

Tu es designer UX. Génère un wireframe low-fidelity d'un portfolio personnel
pour un développeur web & mobile (Guy Muzongo).
Écrans : Accueil desktop + Accueil mobile (SPA à ancres).
Sections dans l'ordre : header/nav sticky avec menu hamburger sur mobile,
hero (H1 + sous-titre + CTA "Voir mes projets"), à propos (photo + texte +
CTA contact), compétences (2 groupes de compétences avec barres de niveau),
projets (3 cartes : plateforme streaming, application bancaire, dashboard
admin), contact (formulaire nom/email/message + bouton envoyer).

Contraintes ajoutées en v2 :
- hiérarchie stricte H1 (un seul) > H2 (titres de section) > H3 (sous-titres)
- zones cliquables d'au moins 44x44px sur mobile (accessibilité tactile)
- palette sobre (2-3 couleurs), pas de dégradés complexes (écoconception)
- prévoir l'état "erreur" et l'état "succès" du formulaire de contact
- prévoir le menu mobile fermé / ouvert (2 états du hamburger)

## Notes d'archivage

Les exports visuels du wireframe (v1 et v2, desktop et mobile) sont décrits
dans wireframe/exports_stitch/exports_notes.md. Le développement final
(site/index.html + css/style.css) respecte fidèlement la structure définie
ici : nav sticky, hero centré, à propos avec photo, compétences en 2 colonnes
sur desktop, projets en grille, formulaire de contact validé en JS.
