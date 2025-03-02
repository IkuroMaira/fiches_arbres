interface Compte {
    deposer(montant: number): number;
    retirer(montant: number): number;
    getBalance(): number;
}

interface Credit {
    retirerACredit(montant: number, mensualite: number);
}

class CompteEnLigne implements Compte, Credit {
    public solde: number;
    public mensualite: number;

    constructor() {
        this.solde = 0;
        this.mensualite = 0;
    }

    deposer(montant: number): number {
        if (montant > 0) {
            this.solde += montant;
            // console.log("Maintenant le montant est de ", this.solde);
        }

        return this.solde;
    }

    retirer(montant: number): number {
        if (montant < 0) {
            this.solde += montant;
            // console.log("Maintenant le solde est à ", this.solde);
        }

        return this.solde;
    }

    getBalance(): number {
        console.log("Vous avez actuellement sur votre compte en ligne ", this.solde)
        return this.solde;
    }

    retirerACredit(montant: number, mensualite: number) {
        this.mensualite = mensualite;
        console.log("La mensualité: ", mensualite, " mois *", montant);
        return this.mensualite;
    }
}

class Epargne implements Compte {
    public solde: number;

    constructor() {
        this.solde = 0;
    }

    deposer(montant: number): number {
        if (montant > 200) {
            this.solde += montant;
        }

        return this.solde;
    }

    retirer(montant: number): number {
        if (this.solde > 1000 && montant < 0) {
            this.solde += montant;
        }

        return this.solde;
    }

    getBalance(): number {
        console.log("Vous avez épargné ", this.solde);
        return this.solde;
    }
}

const operations = [100, 2000, 5000, -100, -1000, 0, -300];

let compteBancaire = new CompteEnLigne();
let epargne = new Epargne();

for (const operation of operations) {
    compteBancaire.deposer(operation);
    compteBancaire.retirer(operation);
    compteBancaire.getBalance();
    compteBancaire.retirerACredit(150, 12);
    epargne.deposer(operation);
    epargne.retirer(operation);
    epargne.getBalance();
}

if (compteBancaire instanceof CompteEnLigne) {
    console.log("Je suis l'objet de CompteEnLigne");
}