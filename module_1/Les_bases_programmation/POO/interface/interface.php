<?php
interface Compte
{
    public function deposer($montant): int;
    public function retirer($montant): int;
    public function getBalance(): int;
}

interface Credit
{
    public function retirerACredit($montant, $mensualite): int;
}

class CompteEnLigne implements Compte, Credit
{
    public $solde;
    public $mensualite;

    public function __construct()
    {
        $this->solde = 0;
        $this->mensualite = 0;
    }

    public function deposer($montant): int
    {
        if ($montant > 0) {
            $this->solde += $montant;
        }

        return $this->solde;
    }

    public function retirer($montant): int
    {
        if ($montant < 0) {
            $this->solde += $montant;
        }

        return $this->solde;
    }

    public function getBalance(): int
    {
         echo "Le solde du compte en ligne est maintenant à " . $this->solde . "\n";
         return $this->solde;
    }

    public function retirerACredit($montant, $mensualite): int
    {
        $this->mensualite = $mensualite;
        echo "La mensualité est de " . $this->mensualite . " mois * " . $montant . "\n";
        return $this->mensualite;
    }
}

class Epargne implements Compte {
    public $solde;

    public function __construct()
    {
        $this->solde = 0;
    }

    public function retirer($montant): int
    {
        if ($this->solde > 1000 && $montant < 0) {
            $this->solde += $montant;
        }

        return  $this->solde;
    }

    public function deposer($montant): int
    {
        if ($montant > 200) {
            $this->solde += $montant;
        }

        return $this->solde;
    }

    public function getBalance(): int
    {
        echo "Le solde de l'épargne est maintenant à " . $this->solde . "\n";
        return $this->solde;
    }
}

$operations = [100, 2000, 5000, -100, -1000, 0, -300];

$compteBancaire = new CompteEnLigne();
$epargne = new Epargne();
$mensualite = 12;

foreach ($operations as $operation) {
//    echo "L'opération est " . $operation . "\n";
    $compteBancaire->retirer($operation, $mensualite) . "\n";
    $compteBancaire->deposer($operation, $mensualite) . "\n";
    $compteBancaire->getBalance() . "\n";
    $compteBancaire->retirerACredit(150, $mensualite);
    $epargne->deposer($operation) . "\n";
    $epargne->retirer($operation) . "\n";
    $epargne->getBalance() . "\n";
}

if ($compteBancaire instanceof CompteEnLigne) {
    echo "Je suis l'objet de CompteEnLigne";
}

if ($compteBancaire instanceof Epargne) {
    echo "Je suis l'objet d'Epargne";
}