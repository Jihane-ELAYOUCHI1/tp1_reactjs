
 // 1. 
function ajouter(a, b) {
    return a + b;
}

// 2.
console.log("La somme est :", ajouter(5, 3));

// 3. 
function saluer(nom, message = "Bonjour") {
    console.log(message + ", " + nom);
}

// 4.
saluer("Alice");
saluer("Bob", "Salut");

// 5. 
const ajouterFlechee = (a, b) => a + b;

console.log("Somme avec fonction fléchée :", ajouterFlechee(5, 3));

//
const saluerFlechee = (nom, message = "Bonjour") => {
    console.log(message + ", " + nom);
};

saluerFlechee("Alice");
saluerFlechee("Bob", "Salut");
