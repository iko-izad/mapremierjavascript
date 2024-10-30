// Manipuler Le DOM

// Sélectionner un élément 
document.head; // Récupère l'élément head
document.title; // Recupere l'element title l'information qui es dans index.html
// console.log(document.title);

// je récupère le titre du document HTML 
// puis , je stocke le titre dans la variable
// titrepadeweb
console.log(document.title);

let titlePageweb = document.title;

console.log(titlePageweb);




const monSpan = document.querySelector("#paragraphe1");
console.log(":", monSpan);


let monSpan1 = document.querySelector("#paragraphe1 span");
console.log("Mon span: ", monSpan);


// Récupere les éléments grâce au selecteur
let nomAgent = document.querySelector('#agent1');

console.log(nomAgent);

let maListe = document.querySelector(".maListe");

console.log("Ma Deuxième liste :", maListe);

let maListeIntegrale = document.querySelectorAll(".maListe");

console.log("Ma Liste Intégrale: ", maListeIntegrale);

for(let i = 0; i < maListeIntegrale.length; i++) {
    console.log(maListeIntegrale[i]);
}

// Modifier un élément du DOM

let elementImage = document.querySelector("#premierImage");
elementImage.setAttribute("class", "photoModifie");

elementImage.setAttribute("alt", "Mon image doit s'afficher");
console.log("Mon image Avant modification :", elementImage);

elementImage.src = "ballon.webp";


elementImage.classList.add("nouvelleClient");

console.log("ajout nouvelle classe :",elementImage );


elementImage.classList.remove("photo");
// Créer un nouvel élément dans la page
// On utilise la méthode createElement()
let nouveauDiv = document.createElement("div");
let nouveauTitre = document.createElement("h3");
// <h3>Mon titre de section niveau 3 </h3>
nouveauTitre.textContent = "Mon titre de section niveau 3";

// Sélectionner l'élément body
let body = document.querySelector('body');
body.appendChild(nouveauTitre);

/* <body> 
         <div> => body.appendChild(nouveauDiv);
         <h3>Mon titre de section niveau 3 </h3>
         </div> */