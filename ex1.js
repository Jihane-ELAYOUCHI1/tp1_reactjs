
let nombre = 10;
let message = "Bonjour";
let actif = true;
let nombres = [1, 2, 3, 4, 5];

let personne = {
    nom: "Jihane",
    age: 20,
    ville: "Rabat"
};

console.log("Nombre :", nombre);
console.log("Message :", message);
console.log("Actif :", actif);
console.log("Tableau :", nombres);
console.log("Personne :", personne);

message = "Bonsoir";
nombres[0] = 10;
personne.metier = "Développeuse mobile";

let phrase = "Il fait beau à " + personne.ville;
let longueurSuperieure = "Bonsoir".length > 5;

console.log("Message modifié :", message);
console.log("Tableau modifié :", nombres);
console.log("Personne modifiée :", personne);
console.log("Phrase :", phrase);
console.log("Longueur supérieure à 5 :", longueurSuperieure);
