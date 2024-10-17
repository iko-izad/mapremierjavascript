// LES BOUCLES




let numero = 0;

while(numero < 9){ // Tant que la valeur de la variable numero est plus petit que 9
    // Alors on exécute les opération suivantes
    console.log(" PASSAGE ", numero , "=======");
    console.log("Numero AVANT l'ajout de + 3, Numero est:", numero);
    numero = numero + 3;

    console.log("Numero APRES l'ajout de + 3, Numero est:", numero);
}

// Boucle FOR
/* LA  boucle FOR permet l'exécuter un code un certain nombre de fois
 en précisant manuellement l'intervalle pour laquelle on souhaite faire la boucle */

 for(let compteur = 0; compteur < 3; compteur++ ) { 
    /* (let compteur = 0; compteur < 3; compteur++)
    let compteur = 0; je déclare la variable compteur avec la valeur 0
    compteur++ A chaque fois que je fais la boucle , j'incrémente de +1 la valeur de la 
    variable compteur.
    compteur < 3; je teste si la valeur de  compteur est plus petite que 3
    */
   // L' opération à exécuter
   console.log("Le compteur est : " + compteur); // afficher le compteur
 }

 // Utiliser la boucle FOR pour manipuler un tableau
 let tableauEleves = ["Fazati","Dominique jean","Faiz","Said","Nicia","Izad","Thouaibat"];

 //
 console.log(tableauEleves[0]);
 console.log(tableauEleves[1]);
 console.log(tableauEleves[2]);

 console.log("=== AVANT la boucle FOR ===");
 for(let i = 0; i < tableauEleves.length; i++) {

    console.log(tableauEleves[i]);
 }