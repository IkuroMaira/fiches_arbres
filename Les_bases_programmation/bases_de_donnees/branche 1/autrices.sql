-- ================================================
-- CREATION ET STRUCTURATION DES DONNEES
-- ================================================

-- 1. CRÉATION ET STRUCTURE DE BASE
-- Note : Dans SQLite, pas besoin de CREATE DATABASE, 
-- la base est automatiquement créée avec le fichier

-- Question : Comment créer une table pour stocker les informations sur les autrices ?
-- Note pédagogique : SQLite utilise un système de types dynamiques (pas besoin de prévoir leur taille)
CREATE TABLE auteurs (
    id_auteur INTEGER PRIMARY KEY,  -- S'auto-incrémente automatiquement
    nom TEXT NOT NULL,              -- TEXT pour les chaînes de caractères
    prenom TEXT NOT NULL,
    nationalite TEXT                -- Ajouté directement dans la création
);

-- Question : Comment créer une table pour les livres avec un lien vers leurs autrices ?
-- Note : SQLite gère automatiquement les index pour les clés étrangères
CREATE TABLE livres (
    id_livre INTEGER PRIMARY KEY,
    titre TEXT NOT NULL,
    id_auteur INTEGER,
    annee_publication INTEGER,
    prix REAL,                      -- REAL pour les nombres décimaux
    FOREIGN KEY (id_auteur) REFERENCES auteurs(id_auteur)
);

-- 2. MODIFICATION DE STRUCTURE
-- Point important : SQLite a des limitations sur ALTER TABLE
-- Note : Seul ADD COLUMN est supporté simplement

-- Question : Comment ajouter une nouvelle colonne ?
-- Attention : On ne peut pas ajouter de colonnes NOT NULL sans valeur par défaut
ALTER TABLE livres ADD COLUMN nb_pages INTEGER;

-- Question : Comment ajouter une contrainte de validation ?
-- Note : Les CHECK sont supportés dans SQLite moderne
CREATE TABLE IF NOT EXISTS livres_temp (
    id_livre INTEGER PRIMARY KEY,
    titre TEXT NOT NULL,
    id_auteur INTEGER,
    annee_publication INTEGER CHECK(annee_publication > 1900),
    prix REAL CHECK(prix >= 0),
    nb_pages INTEGER,
    FOREIGN KEY (id_auteur) REFERENCES auteurs(id_auteur)
);

-- 3. INSERTION DES DONNÉES
-- Question : Comment ajouter plusieurs autrices en une seule fois ?
INSERT INTO auteurs (nom, prenom, nationalite) VALUES
    ('Le Guin', 'Ursula K.', 'Américaine'),
    ('Butler', 'Octavia', 'Américaine'),
    ('Atwood', 'Margaret', 'Canadienne'),
    ('McIntyre', 'Vonda N.', 'Américaine'),
    ('Shelley', 'Mary', 'Britannique');

-- Question : Comment ajouter les livres avec leurs références ?
INSERT INTO livres (titre, id_auteur, annee_publication, prix) VALUES
    ('La Main gauche de la nuit', 1, 1969, 22.99),
    ('Les Dépossédés', 1, 1974, 23.99),
    ('La Parabole du semeur', 2, 1993, 21.99),
    ('Lilith''s Brood', 2, 1987, 24.99),
    ('The Handmaid''s Tale', 3, 1985, 19.99),
    ('Oryx and Crake', 3, 2003, 20.99),
    ('Dreamsnake', 4, 1978, 18.99),
    ('Manuscrit anonyme 2084', NULL, 2023, 15.99);

-- Suppression impossible
DELETE FROM auteurs WHERE id_auteur = 1;

-- ================================================
-- REQUÊTES DE SÉLECTION
-- ================================================

-- 4. REQUÊTES SIMPLES
-- Question : Comment voir tous les livres ?
SELECT * FROM livres;

-- Question : Comment voir certaines colonnes spécifiques ?
SELECT titre, annee_publication FROM livres;

-- Question : Comment formater les résultats ?
-- Note : SQLite supporte les alias et les expressions simples
SELECT 
    titre AS titre_livre,
    prix AS prix_euros,
    ROUND(prix * 1.1, 2) AS prix_avec_taxe
FROM livres;

-- ================================================
-- FILTRAGE ET TRI
-- ================================================

-- 5. FILTRAGE
-- Question : Quels sont les livres récents ?
SELECT titre, annee_publication
FROM livres 
WHERE annee_publication >= 2000;

-- Question : Quels sont les livres à prix modéré des années 80 ?
-- Note : SQLite supporte les conditions complexes
SELECT titre, prix
FROM livres 
WHERE annee_publication BETWEEN 1980 AND 1989
AND prix < 20;

-- Question : Comment utiliser des motifs de recherche ?
-- Note : SQLite supporte LIKE et les expressions régulières avec REGEXP
SELECT titre 
FROM livres 
WHERE titre LIKE '%the%'
OR titre LIKE '%The%';

-- 6. TRI
-- Question : Comment trier les résultats ?
SELECT titre, prix
FROM livres 
ORDER BY prix DESC, titre ASC;

-- ================================================
-- JOINTURES ET AGRÉGATIONS
-- ================================================

-- 7. JOINTURES

-- Question : Comment lister les livres avec le nom de leur autrice ?
-- Note : Ancienne syntaxe de jointure avec des alias de table pour plus de lisibilité
SELECT 
    l.titre,
    a.prenom || ' ' || a.nom AS autrice,
    l.annee_publication
FROM livres l, auteurs a
WHERE l.id_auteur = a.id_auteur;

-- Question : Comment lister les livres avec leurs autrices ?
SELECT l.titre, a.prenom, a.nom
FROM livres l
INNER JOIN auteurs a ON l.id_auteur = a.id_auteur;

-- Question : Comment voir toutes les autrices, même sans livre ?
SELECT 
    a.prenom || ' ' || a.nom AS autrice,
    COALESCE(l.titre, 'Aucun livre') AS livre
FROM auteurs a
LEFT JOIN livres l ON a.id_auteur = l.id_auteur;

-- Question : Comment voir tous les livres, même sans autrice ?
SELECT 
    l.titre,
    COALESCE(a.prenom || ' ' || a.nom, 'Autrice inconnue') AS autrice
FROM livres l
LEFT JOIN auteurs a ON l.id_auteur = a.id_auteur;

-- 8. AGRÉGATIONS
-- Note : SQLite supporte toutes les fonctions d'agrégation standards

-- Question : Combien de livres par autrice ?
SELECT 
    a.prenom || ' ' || a.nom AS autrice,
    COUNT(l.id_livre) AS nombre_livres
FROM auteurs a
LEFT JOIN livres l ON a.id_auteur = l.id_auteur
GROUP BY a.id_auteur;

-- Question : Quelles sont les statistiques de prix par autrice ?
SELECT 
    a.nom,
    ROUND(AVG(l.prix), 2) AS prix_moyen,
    MIN(l.prix) AS prix_min,
    MAX(l.prix) AS prix_max,
    COUNT(l.id_livre) AS nombre_livres
FROM auteurs a
LEFT JOIN livres l ON a.id_auteur = l.id_auteur
GROUP BY a.id_auteur;

-- Question : Quelle est la répartition par décennie ?
SELECT 
    (annee_publication/10)*10 || 's' AS decennie,
    COUNT(*) AS nombre_livres,
    ROUND(AVG(prix), 2) AS prix_moyen
FROM livres
GROUP BY (annee_publication/10)*10
ORDER BY decennie;

-- ================================================
-- EXERCICES SUGGÉRÉS POUR SQL
-- ================================================
-- 1. Trouvez les livres dont le prix est supérieur à la moyenne
-- 2. Listez les autrices avec leur nombre de livres, triées par productivité
-- 3. Calculez le prix total des livres par nationalité d'autrice
-- 4. Trouvez les livres les plus récents de chaque autrice
-- 5. Comparez les prix moyens avant et après 2000

-- Note : Pour tester ces exercices, vous pouvez utiliser l'interface SQLite 
-- en ligne de commande ou un outil graphique comme DB Browser for SQLite