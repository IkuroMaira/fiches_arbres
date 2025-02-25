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
            echo "Le nombre maximum est atteint";
            echo "<br>";
        } else if ($total < $this->capaciteMax){
            $placesRestantes = $this->capaciteMax - $nbrNouveauxPassagers;
            // Cette ligne permet de faire changer le nombre de passager au 2ème appel de la méthode charger () :
            $this->nbrPassagers = $total;
            echo "On charge " . $nbrNouveauxPassagers . " hommes. Il reste " . $placesRestantes . " places.";
            echo "<br>";
        }
    }

    public function decharger($nbrHommes)
    {
        echo "On décharge " . $nbrHommes . " hommes";
    }
}

class Intercepteur extends Vaisseaux
{
    public $nbrCanons;
    public $type = "Intercepteur";

    public function __construct($name, $taille, $nbrCanons)
    {
        parent::__construct($name, $taille);
        $this->nbrCanons = $nbrCanons;
    }

    public function tirer()
    {
        echo "On tire !";
    }

    public function recharger()
    {
        echo "On charge !";
    }
}

$croiseur1 = new Croiseur("Acclamator", 752, 700);
print_r($croiseur1);
echo "<br>";
$croiseur1->charger(600);
$croiseur1->charger(200);

$croiseur2 = new Croiseur("Corvette", 150, 165);
print_r($croiseur2);
echo "<br>";
$croiseur2->charger(100);

$intercepteur1 = new Intercepteur("X-wing", 12.5, 2);
print_r($intercepteur1);

function DisplayTypeVaisseau($vaisseauName, $vaisseauType, $taille, $nombreHommes, $nbrCanons) {
    if ($vaisseauType === "croiseur") {
        $croiseur = new Croiseur($vaisseauName, $taille, $nombreHommes);
        print_r($croiseur);
    } elseif ($vaisseauType === "intercepteur") {
        $intercepteur = new Intercepteur($vaisseauName, $taille, $nbrCanons);
        print_r($intercepteur);
    }
}

//DisplayTypeVaisseau();