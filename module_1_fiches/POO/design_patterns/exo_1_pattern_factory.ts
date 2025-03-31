// Interface pour le personnage principal
interface MainCharacter {
    getFullName(): string;
}

// Implémentation de l'interface MainCharacter
class MainCharacterImpl implements MainCharacter {
    private nom: string;
    private prenom: string;
    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }
    getFullName(): string {
        return `${this.prenom} ${this.nom}`;
    }
}

// Classe abstraite pour représenter un manga
abstract class Manga {
    protected titre: string;
    protected mainCharacterPrincipal: MainCharacter;
    constructor(titre: string, mainCharacterPrincipal: MainCharacter) {
        this.titre = titre;
        this.mainCharacterPrincipal = mainCharacterPrincipal;
    }
    getTitre(): string {
        return this.titre;
    }
    getPersonnagePrincipal(): MainCharacter {
        return this.mainCharacterPrincipal;
    }
    getStringType(): string {
        return “manga”;
    }
    getDescription(): string {
        return `Ce ${this.getStringType()} s'appelle ${this.titre} et son personnage principal est ${this.mainCharacterPrincipal.getFullName()}`;
    }
}

// Classe Shojo qui hérite de Manga
class Shojo extends Manga {
    constructor(titre: string, mainCharacterPrincipal: MainCharacter) {
        super(titre, mainCharacterPrincipal);
    }
    getStringType(): string {
        return “shojo”;
    }
}

// Classe Shonen qui hérite de Manga
class Shonen extends Manga {
    constructor(titre: string, mainCharacterPrincipal: MainCharacter) {
        super(titre, mainCharacterPrincipal);
    }
    getStringType(): string {
        return “shonen”;
    }
}

// Enum pour le type de manga
enum TypeManga {
    SHOJO = "SHOJO",
    SHONEN = "SHONEN"
}

// Exemple d'utilisation
const luffy = new MainCharacterImpl("Monkey D.", "Luffy");
const onePiece = new Shonen("One Piece", luffy);
const usagi = new MainCharacterImpl("Tsukino", "Usagi");
const sailorMoon = new Shojo("Sailor Moon", usagi);
console.log(onePiece.getDescription());
// Ce shonen s'appelle One Piece et son personnage principal est Luffy Monkey D.
console.log(sailorMoon.getDescription());
// Ce shojo s'appelle Sailor Moon et son personnage principal est Usagi Tsukino.