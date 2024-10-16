// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10;
let a2 = 20;
// Nous calculons le total
let tot = a1 + a2;
// Prix d'un troisieme article
let a3 = 50;
// Nous ajoutons a3 au total
tot = tot + a3;

console.log("Le prix total avant reduction est de : ", tot);

//Nous appliquons 20% de reduction
let tot2 = tot - tot*0.2
console.log("Le prix total après reduction est de : ", tot2);