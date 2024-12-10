import React, { useState } from 'react';

const flashcards = [
    {
        question: "Qu'est-ce que l'asynchrone en programmation ?",
        answer: "C'est une façon d'exécuter des opérations sans bloquer le reste du programme. Comme faire cuire des pâtes tout en préparant la sauce !"
    },
    {
        question: "Qu'est-ce qu'une Promesse en JavaScript ?",
        answer: "C'est comme un contrat qui dit : 'Je promets de te donner un résultat plus tard'. Elle peut être résolue (succès) ou rejetée (échec)."
    },
    {
        question: "À quoi sert le mot-clé 'async' ?",
        answer: "Il indique qu'une fonction contient des opérations asynchrones. C'est comme mettre un panneau 'Attention : attente possible' sur une fonction."
    },
    {
        question: "Que fait le mot-clé 'await' ?",
        answer: "Il met en pause l'exécution de la fonction jusqu'à ce qu'une promesse soit résolue. Comme attendre que l'eau bouille avant d'y mettre les pâtes."
    },
    {
        question: "À quoi sert fetch() ?",
        answer: "C'est une fonction qui permet de faire des requêtes HTTP. Comme envoyer un coursier chercher un colis et attendre son retour."
    },
    {
        question: "Qu'est-ce que l'Event Loop ?",
        answer: "C'est le chef d'orchestre de JavaScript qui gère l'ordre d'exécution des tâches asynchrones. Il s'assure que tout se passe au bon moment."
    },
    {
        question: "Qu'est-ce qu'un callback ?",
        answer: "C'est une fonction qui sera exécutée plus tard, quand une tâche sera terminée. Comme dire 'appelle-moi quand tu as fini'."
    },
    {
        question: "Pourquoi utiliser .json() après fetch() ?",
        answer: "Pour transformer la réponse en objet JavaScript utilisable. C'est comme traduire un message dans une langue que nous comprenons."
    }
    // Ajoutez d'autres cartes ici
];

export default function Flashcards() {
    const [currentCard, setCurrentCard] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const nextCard = () => {
        setCurrentCard((prev) => (prev + 1) % flashcards.length);
        setShowAnswer(false);
    };

    const prevCard = () => {
        setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        setShowAnswer(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="text-sm text-gray-500 mb-4">
                        Carte {currentCard + 1} sur {flashcards.length}
                    </div>

                    <div
                        className="min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        <p className="text-lg text-center">
                            {showAnswer ? flashcards[currentCard].answer : flashcards[currentCard].question}
                        </p>
                    </div>

                    <div className="mt-8 flex justify-between">
                        <button
                            onClick={prevCard}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Précédent
                        </button>
                        <button
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {showAnswer ? 'Voir Question' : 'Voir Réponse'}
                        </button>
                        <button
                            onClick={nextCard}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}