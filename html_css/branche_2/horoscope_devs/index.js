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

    console.log("console pas de moi: ",item.sign, item.description);

    // J'ai récupéré la div avec l'id "horoscope"
    // const getDiv = document.getElementById("horoscope");
    // Cela permet de sélectionner l'élément HTML où tu vas ajouter dynamiquement les articles contenant les signes et descriptions.

    // On boucle sur chaque item
    // createElement est une méthode de JavaScript utilisée pour créer un nouvel élément HTML dynamiquement.
    // Cet élément n'est pas encore dans le DOM, mais tu peux le manipuler (par exemple, lui ajouter du texte, des attributs) avant de l'insérer dans la page.
    // const article = document.createElement('article'); // Ici on créé l'élément article. Contiendra le signe et la description.
    // const h2 = document.createElement('h2'); // Ici ça créé l'élément h2 pour le signe
    // const p = document.createElement('p'); // Ici ça créé l'élément p pour la description

    // Ici on ajouter le texte au h2 et p
    // h2.innerText = item.sign; // Mettre le signe astrologique comme texte du h2
    // p.innerText = item.description;

    // On ajoute le h2 et le p à l'élément article
    // appendChild est une méthode qui permet d'ajouter un élément enfant à un élément parent dans le DOM.
    // En d'autres termes, cela te permet d'insérer dynamiquement un élément (précédemment créé avec createElement, par exemple) dans le DOM.
    // article.appendChild(h2);
    // article.appendChild(p);

    // On ajoute l'article à la div horoscope
    // getDiv.appendChild(article);

    // Les éléments h2 et p sont d'abord ajoutés à l'élément article, puis l'article entier est ajouté à la div contenant l'horoscope.


    // TEST 1
    // const getDiv2 = document.getElementById("horoscope");
    // const h2 = document.createElement('h2')
    // h2.innerText = item;
    // getDiv2.appendChild(h2);
    // Nous affiche juste des objets. Mais bonne nouvelle je vois une liste

    // TEST 2
    // const getDiv3 = document.getElementById("horoscope");
    // const article = document.createElement('article');
    // const p = document.createElement('p')
    // On créé un paragraphe
    // article.innerText = item;
    // item = le tableau d'objets
    // p.innerText = item.sign;
    // on n'arrive pas à récupérer les signes astros
    // p.innerText = item.description
    // on arrive à récupérer les descriptions des objets
    // peut-être je créer un conflit avec la ligne précédente
    // console.log(getDiv3.appendChild(article))
    // S'affiche dans le console.log avec les mot "object"
    // console.log(getDiv3.appendChild(p));
    // S'affiche dans le console.log
    // On affiche toujours des objets et toujours en liste avec jusste item pour les 'innerText'

    // TEST 3
    // const getDiv4 = document.getElementById("horoscope");
    // Je récupère la div
    // const article = document.createElement('article');
    // const h2 = document.createElement('h2');
    // const p = document.createElement('p');
    // Je créé un élement article, titre h2 et paragraphe

    // article.innerText = item;
    // h2.innerText = item.sign;
    // Là j'arrive à récupérer les signes astros
    // p.innerText = item.description;

    // Les enfants !!!!!!!
    // console.log(getDiv4.appendChild(article));
    // console.log(getDiv4.appendChild(h2));
    // console.log(getDiv4.appendChild(p));
    // Je mets article, h2 et p comme enfant de la div "horoscope"

    // console.log(getDiv4)
    // S'affiche les objets avec toutes les infos

    // Dans cette partie j'arrive à afficher le h2 et la description mais je n'ai toujours pas la notion d'article qui s'affiche (h2 et description dans article)
    // const article = document.createElement('article');

    // getDiv4.appendChild(article).appendChild(p);
    // getDiv4.appendChild(article);
    // article.appendChild(h2);
    // article.appendChild(p);

    // PROPRE & RÉPONSE FINALE
    const getDiv4 = document.getElementById("horoscope");
    // Ici

    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.innerText = item.sign;
    p.innerText = item.description;

    article.appendChild(h2);
    article.appendChild(p);
    getDiv4.appendChild(article);
}
