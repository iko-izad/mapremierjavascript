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

alert(prix3)

let age1 = 20 - 24;
let age2 = 24 - 34;

function calculage (age1, age22) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}

let age = calculage(20,43);



/* Fonction pour multiplier deux chiffers ou deux nombres entiers
La fonction doit retourner le résultat de la multiplication.
*/

fonction = nombresentiers(10,20);{
    let resultat = nom1 * nom2;
    return resultat;
}

let produit = nombresentiers(10,40);

 console.log(resultat,produit);


 // 1. Déclaration de l'objet ticket
let ticket = {
    nomFilm: "Koungou",
    prix: 10.50,
    numeroSalle: 5
};

// 2. Déclaration d'une variable nom avec votre nom
let nom = "VotreNom"; // Remplacez "VotreNom" par votre vrai nom

// 3. Création d'un message avec les valeurs de l'objet et la variable nom
let texteAffichage = `Bonjour ${nom}, votre film ${ticket.nomFilm} est en salle ${ticket.numeroSalle}.`;

// 4. Vérification du résultat avec console.log
console.log(texteAffichage);
