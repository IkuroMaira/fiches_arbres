function sendMessage(message, fromName, toName) {
    console.log(`From : ${fromName} to : ${toName} Message : ${message}`);
}

// On ne peut pas appeler une fonction avant de la déclarer
sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
// on doit indiquer une valeur
sendMessage("Hello", "Gwen", "Daniel")
// On doit mettre des parenthèses
sendMessage("Super on se voit mardi !", "Linda", "Marc")

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"
// On doit appeler les bonne variable
sendMessage(myMessage, myName, contactName)