let totalLivres = 500;
/* J'ai acheter 50 livres de plus */
totalLivres += 50;
/* Je jeter 10 */
totalLivres -= 10;
/* je racheter 5 des livres jetés */
totalLivres += 5;

console.log(totalLivres);

let affichageTotaLlivres = "Le nombre total est ";

console.log(affichageTotaLlivres,totalLivres);



// 1. Initialisation de la variable totalLivres
let totalLivres1 = 500;

// Simulons des opérations pour modifier totalLivres
totalLivres -= 100; // 100 billets vendus
totalLivres += 50;  // 50 billets ajoutés pour la prochaine séance
totalLivres -= 20;  // 20 billets réservés

// 2. Vérification du résultat avec console.log
console.log("Total de livres après opérations : " + totalLivres);

// 3. Création de la variable affichageTotalLivres
let affichageTotalLivres = totalLivres;

// 4. Affichage du résultat final
console.log("Nombre total de billets disponibles pour le film Koungou : " + affichageTotalLivres);
