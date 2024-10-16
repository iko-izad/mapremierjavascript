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



// Définition du nouveau film
let filmKoungou = {
    nom: "Koungou",
    salle: 10,
    prix: 20.50
  };
// Déclaration d'une fonction 'delivrerBillet' qui prend un paramètre 'filmKoungou'
let delivrerBillet = (filmKoungou); {
    // Affiche un message indiquant que le billet est prêt
    console.log("Voici votre billet");
   // Affiche le nom du film en utilisant la propriété 'nom' de l'objet 'filmKoungou'
    console.log("Film : " + filmKoungou.nom);

    console.log("Salle : " + filmKoungou.salle);
     // Affiche le prix du billet en utilisant la propriété 'prix' de l'objet 'filmKoungou'
    console.log("Prix : " + filmKoungou.prix + " euros");
     // Affiche un message d'encouragement pour le film
    console.log("Bon film !");
  }