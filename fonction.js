// LES FONCTIONS 
/* Les fonction sont des opérations qui effectuent
des calculs et retournent un résultat.
L' avantage des fonctions sont réutilisables.
*/

let prix = 8 + 5;
let prix2 = 40 + 70;
// je déclare un fonction qui a pour tache d'additionner deux chiffres et retourner le résultat */
function calculaddition (chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}
// 2. Ensuite, j'appelle la fonction calculaddition()
let prix3 = calculaddition(40,70);

(prix3)












// Création de l'objet ticket avec ses propriétés
let ticket = {
    nomFilm: "Koungou",
    prix: 9.50,
    numeroSalle: 3
  };
  
  // Déclaration de la variable nom
  let nom = "Gastro";
  
  // Création de la phrase d'affichage
  let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle;
  
  // Affichage du message dans la console
  console.log(texteAffichage);