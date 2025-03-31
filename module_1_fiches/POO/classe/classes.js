const Category = Object.freeze({
    Fiction: Symbol('fic'),
    Docu: Symbol('doc'),
});

class Client {
    constructor(name) {
        this.name = name
        this.films = []
    }
    rentFilm(film) {
        this.films.push(film)
    }
    showRentedFilmsTitle() {
        console.log(this.films.map(e => e.title).join(", "))
    }
    mostRentedCategory() {
        let docuCount = 0
        for(let i = 0 ; i < this.films.length ; i++) {
            if(this.films[i].category === Category.Docu) {
                docuCount ++
            }
        }
        if (docuCount > this.films.length/2) {
            console.log(`${this.name} loue plus de Docu`)
        } else {
            console.log(`${this.name} loue plus de Fictions`)
        }
    }
}

class Film {
    constructor(title, year, director, category) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.category = category;
    }
}

class Director {
    constructor(firstName, lastName, birthYear) {
        this.birthYear = birthYear;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

const showFilmDetails = film => {
    const filmType =
        film.category === Category.Docu
            ? 'de type documentaire'
            : 'de type fictionnel';
    console.log(
        `Le film ${film.title} ${filmType} sorti en ${film.year}, réalisé par ${film.director.firstName} ${film.director.lastName} agé.e de ${film.director.getAge()} ans`
    );
};

const anatomy = new Film(
    "Anatomie d'une chute",
    '2023',
    new Director('Justine', 'Tiret', 1978),
    Category.Docu
);
const starwars = new Film(
    "Star Wars",
    '1977',
    new Director('Georges', 'Lucas', 1944),
    Category.Fiction
);
const titanic = new Film(
    "Titanic",
    '1997',
    new Director('James', 'Cameron', 1954),
    Category.Fiction
);
const kevin = new Client("kevin")
kevin.rentFilm(anatomy)
kevin.rentFilm(starwars)
kevin.rentFilm(titanic)
kevin.showRentedFilmsTitle()
kevin.mostRentedCategory()