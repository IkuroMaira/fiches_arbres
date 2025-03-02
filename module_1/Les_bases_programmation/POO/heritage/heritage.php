<?php
# Exercice 1 : Heritage

// Super-classe
class Vaisseaux
{
    public $name;
    public $type;
    public $taille;

    public function __construct($name, $taille)
    {
        $this->name = $name;
        $this->taille = $taille;
    }
}

// Sous-classes
class Croiseur extends Vaisseaux
{
    public $type = "croiseur";
    public $capaciteMax;
    public $nbrPassagers;

    public function __construct($name, $taille, $capaciteMax)
    {
        parent::__construct($name, $taille);
        $this->capaciteMax = $capaciteMax;
        $this->nbrPassagers = 0;
    }

    public function charger($nbrNouveauxPassagers)
    {
        $total = $this->nbrPassagers + $nbrNouveauxPassagers;

        if ($total > $this->capaciteMax) {
            echo "On charge " . $nbrNouveauxPassagers . ". Le nombre maximum est atteint";
            echo "<br>";
        } else if ($total < $this->capaciteMax){
            $placesRestantes = $this->capaciteMax - $nbrNouveauxPassagers;
            // Cette ligne permet de faire changer le nombre de passager au 2ème appel de la méthode charger () :
            $this->nbrPassagers = $total;
            echo "On charge " . $nbrNouveauxPassagers . " hommes. Il reste " . $placesRestantes . " places.";
            echo "<br>";
        }
    }

    // Cette méthode n'est pas utilisée
    public function decharger($nbrHommes)
    {
        echo "On décharge " . $nbrHommes . " hommes";
    }
}

class Intercepteur extends Vaisseaux
{
    public $nbrCanons;
    public $type = "Intercepteur";
    public $nbrTire;

    public function __construct($name, $taille, $nbrCanons)
    {
        parent::__construct($name, $taille);
        $this->nbrCanons = $nbrCanons;
        $this->nbrTire = 0;
    }

    public function tirer()
    {
        // La condition est à 2 car on incrémente après et si on met 3 (nombre max de tire) il va encore tirer
        if ( $this->nbrTire < 2) {
            $this->nbrTire += 1;
            echo "On tire !\n";
        } else {
            echo "On en peut plus tirer ! Il faut recharger !\n";
        }
    }

    public function recharger()
    {
        $this->nbrTire =0;
    }
}

function DisplayTypeVaisseau($vaisseauName, $vaisseauType, $taille, $capaciteMax, $nbrCanons) {
    if ($vaisseauType === "croiseur") {
        print_r($croiseur);
        echo "<br >";
        $croiseur = new Croiseur($vaisseauName, $taille, $capaciteMax);
        $croiseur->charger(600);
        $croiseur->charger(200);
        echo "<br >";
    } else if ($vaisseauType === "intercepteur") {
        $intercepteur = new Intercepteur($vaisseauName, $taille, $nbrCanons);
        echo "<br >";
        print_r($intercepteur);
        $intercepteur->tirer();
        $intercepteur->tirer();
        $intercepteur->tirer();
        $intercepteur->recharger();
        $intercepteur->tirer();
        echo "<br >";
    }
}

DisplayTypeVaisseau("Acclamator", "croiseur", 752, 700, 0);
DisplayTypeVaisseau("X-wing", "intercepteur", 12,5, 2);