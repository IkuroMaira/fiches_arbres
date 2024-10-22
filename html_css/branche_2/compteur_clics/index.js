// La constante qui récupère le bouton dans le HTML
const getCounter = document.getElementById("counter");

// Le variable de départ pour compter les cliques
let count = 0;

// Ici on ajoute un évènement sur le bouton
getCounter.addEventListener('click', () => {
    // Ici l'évènement se passe au clic
    // à chaque clique on incrément
    count++; // Incrémente la variable de 1
    console.log(count); // J'affiche dans le console la valeur de la variable count
    getCounter.innerText = count + " clics"; // je modifie le texte du bouton en lui attribuant la valeur de la variable count
})

// TEST 1_______________________________________
//Je récupère le bouton
// let getBtn = document.getElementById("test");
// Quand je clique une fenêtre alerte s'affiche
// getBtn.addEventListener("click",() => {
//     for (count = 0; count <= 3; count++) {
//         alert(count)
//         getBtn.innerText = count; // OK
//     }
// });