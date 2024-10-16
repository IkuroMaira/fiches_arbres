// firstLanguage = "Javascript";
// secondLanguage = "Javascript"

// thirdLanguage = "Javascript";
// secondLanguage = "Javascript"

// Que vaudront chacune des variables
// firstLanguage, secondLanguage  et thirdLanguage  à la fin du code suivant :
let firstLanguage = "HTML";
let secondLanguage = "PHP";
let thirdLanguage = firstLanguage ;
firstLanguage  = "Javascript";
secondLanguage = firstLanguage ;

console.log(firstLanguage)
console.log(secondLanguage)

// Et dans ce cas-ci :
let firstLanguage1  = "HTML";
let secondLanguage1  = "PHP";
firstLanguage1  = "Javascript";
let thirdLanguage1  = firstLanguage1 ;
secondLanguage1  = firstLanguage1 ;

console.log(thirdLanguage1)
console.log(secondLanguage)