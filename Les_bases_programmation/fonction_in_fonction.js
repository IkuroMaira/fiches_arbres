function calculSurface(longueur, largeur) {
    return longueur * largeur;
}

function  calculVolume(longueur, largeur, hauteur) {
    const surfaceBase = calculSurface(longueur, largeur);
    return surfaceBase * hauteur;
}

const volume = calculVolume(3, 5, 9);
console.log(volume);