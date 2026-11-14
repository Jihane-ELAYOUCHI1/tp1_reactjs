
let nombre = 7;

// 1.
if (nombre % 2 === 0) {
    console.log("Le nombre est pair");
} else {
    console.log("Le nombre est impair");
}

// 2.
let jour = 3;

switch (jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Numéro de jour invalide");
}

// 3.
let nombre2 = -5;

if (nombre2 > 0) {
    console.log("Positif");
} else if (nombre2 < 0) {
    console.log("Négatif");
} else {
    console.log("Zéro");
}
