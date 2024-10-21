const horoscope = [
    {
        sign: 'Bélier',
        description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
    },
    {
        sign: 'Taureau',
        description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
    },
    {
        sign: 'Gémeaux',
        description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
    },
    {
        sign: 'Cancer',
        description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
    }
];

// TODO: recupère l'élément <div id="horoscope">

for (const item of horoscope) {
    // TODO: remplace le console.log par le code qui ajoute un article
    // pour chaque item avec le format suivant :
    // <article>
    //   <h2>Sign</h2>
    //   <p>Description</p>
    // </article>

    console.log(item.sign, item.description);

    // J'ai récupéré la div avec l'id "horoscope"
    const getDiv = document.getElementById("horoscope");
    // Cela permet de sélectionner l'élément HTML où tu vas ajouter dynamiquement les articles contenant les signes et descriptions.

    // On boucle sur chaque item
    // createElement est une méthode de JavaScript utilisée pour créer un nouvel élément HTML dynamiquement.
    // Cet élément n'est pas encore dans le DOM, mais tu peux le manipuler (par exemple, lui ajouter du texte, des attributs) avant de l'insérer dans la page.
    const article = document.createElement('article'); // Ici on créé l'élément article. Contiendra le signe et la description.
    const h2 = document.createElement('h2'); // Ici ça créé l'élément h2 pour le signe
    const p = document.createElement('p'); // Ici ça créé l'élément p pour la description

    // Ici on ajouter le texte au h2 et p
    h2.innerText = item.sign; // Mettre le signe astrologique comme texte du h2
    p.innerText = item.description;

    // On ajoute le h2 et le p à l'élément article
    // appendChild est une méthode qui permet d'ajouter un élément enfant à un élément parent dans le DOM.
    // En d'autres termes, cela te permet d'insérer dynamiquement un élément (précédemment créé avec createElement, par exemple) dans le DOM.
    article.appendChild(h2);
    article.appendChild(p);

    // On ajoute l'article à la div horoscope
    getDiv.appendChild(article);

    // Les éléments h2 et p sont d'abord ajoutés à l'élément article, puis l'article entier est ajouté à la div contenant l'horoscope.
}
