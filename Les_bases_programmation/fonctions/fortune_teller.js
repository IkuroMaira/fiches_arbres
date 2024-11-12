function tellFortune ( numberOfChildren, partnerName, location, jobTitle) {
    console.log(`Vous serez un ${jobTitle} dans ${location}, et marié à ${partnerName} avec ${numberOfChildren} enfants.`)
}

tellFortune(5, "Milan", "Paris", "banquier")
tellFortune(7, "Jeff", "New York", "artiste")
tellFortune(2, "Samantha", "Marseille", "avocat")

// Réponse :
/*
function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
        partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);*/
