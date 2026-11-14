
 //1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2.
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}

// 3.
let nombres = [10, 20, 30, 40, 50];

for (let nombre of nombres) {
    console.log(nombre);
}

// 4. 
let recherche = 30;
let trouve = false;

for (let nombre of nombres) {
    if (nombre === recherche) {
        trouve = true;
        break;
    }
}

if (trouve) {
    console.log("Nombre trouvé");
} else {
    console.log("Nombre non trouvé");
}
