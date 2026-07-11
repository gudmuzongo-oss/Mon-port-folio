# Prototype Figma — Interactions

Le prototype relie les écrans du wireframe v2 avec les interactions
suivantes (minimum 6 requis) :

1. Clic sur "Accueil" (menu) -> scroll/ancre vers la section Hero (#hero)
2. Clic sur "À propos" (menu) -> ancre vers la section À propos (#apropos)
3. Clic sur "Compétences" (menu) -> ancre vers la section Compétences (#competences)
4. Clic sur "Projets" (menu) -> ancre vers la section Projets (#projets)
5. Clic sur "Contact" (menu) -> ancre vers la section Contact (#contact)
6. Clic sur le bouton hamburger (mobile) -> ouverture/fermeture du menu
   (2 états : fermé / ouvert)
7. Clic sur "Voir mes projets" (CTA Hero) -> ancre vers #projets
8. Soumission du formulaire de contact :
   - cas invalide -> affichage des messages d'erreur sous les champs
   - cas valide -> affichage du message de confirmation (feedback succès)
     et réinitialisation du formulaire

Ces interactions sont fidèlement reproduites dans le développement final
via les ancres HTML natives (liens #id) et le script site/js/app.js
(menu mobile + validation formulaire).
