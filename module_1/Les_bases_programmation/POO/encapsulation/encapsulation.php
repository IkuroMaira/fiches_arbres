<?php
// ENCAPSULATION

/*
 * Ma classe Chambre avec laquel je vais créer une instance un objet
 */
class Chambre
{
    /*
     * Pour connaître la capacité de la chambre
     */
    private int $capicite;

    /*
     * Pour lister la collection de linge
     * On attribue une quantité de départ à chaque type de linge -> ici 0
     */
    private array $collectionLinge = [
        'peignoir' => 0,
        'serviette' => 0,
        'drap' => 0,
    ];

    /*
     * On va récupérer le nombre donner lors de la création de l'instance/objet
     */
    public function __construct(int $nbrPersonnes)
    {
        $this->capicite = $nbrPersonnes;
    }

    public function getCapacite(): int
    {
        echo "Il y a " . $this->capicite . " client(s) dans la chambre.\n";
        return $this->capicite;
    }

    public function ajouterLinge($objetLinge): bool
    {
        // TODO: gérer la linge avec la capacité
        $type = $objetLinge->getType();

        if ($this->collectionLinge[$type] < $this->capicite) {
//            $this->collectionLinge[$type] += 1;
            $this->collectionLinge[$type]++;
            return true;
        } else {
            return false;
        }

//        var_dump($type);
    }

    public function getCollection(): array
    {
        return $this->collectionLinge;
    }
}

/*
 * Ma classe abstraite Linge : elle est abstraite car elle ne donnera pas d'instance
 * Type de linge attendu : peignoir, serviette et drap
 */
abstract class Linge
{
    /*
     * Ici le type de ligne
     */
    protected string $type;

    public function __construct(string $type)
    {
        $this->type = $type;
    }

    /*
     * On créé un accesseur/"getter" pour avoir accès à la propriété de $type qui est déclarée protégée
     * Ce qui signifie qu'elle n'est pas accéssible depuis l'extérieur de la classe
     * Cela va permettre à la classe Chambre de connaître le type de linge sans avoir un accès direct à la propriété
     * On récupère le type de linge
     */
    public function getType(): string
    {
        return $this->type;
    }
}

class Peignoir extends Linge
{
    public function __construct()
    {
        parent::__construct('peignoir');
    }
}

class Serviette extends Linge
{
    public function __construct()
    {
        parent::__construct('serviette');
    }
}

class Draps extends Linge
{
    public function __construct()
    {
        parent::__construct('drap');
    }
}

// Je créé mon instance Chambre avec une capacité de 3 personnes
$chambre = new Chambre(3);
$chambre->getCapacite();

// Je souhaite ajouter le nombre de linges nécessaires en utilisant les enfants de linge
$chambre->ajouterLinge(new Peignoir());
//var_dump($chambre->getCollection());
$chambre->ajouterLinge(new Peignoir());
$chambre->ajouterLinge(new Peignoir());
// C'est le peignoir de trop !
//$chambre->ajouterLinge(new Peignoir());
if ($chambre->ajouterLinge(new Peignoir())) { // Si le "return" est true
    echo "Le peignoir a été ajouté et vous pouvez encore en ajouter.\n";
} else { // Si le "return" est false
    echo "On ne peut plus ajouter de peignoir !\n";
}

if ($chambre->ajouterLinge(new Serviette())) {
    echo "La serviette a été ajoutée et vous pouvez encore en ajouter.\n";
} else {
    echo "On ne peut plus ajouter de serviette !\n";
}
// le peignoir n'est pas ajouté quand le nombre est supérieur à la capacité
var_dump($chambre->getCollection());