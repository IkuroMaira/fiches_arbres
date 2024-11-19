import React, { useState } from 'react';

const flashcards = [
    {
        question: "Qu'est-ce que l'asynchrone en programmation ?",
        answer: "C'est une façon d'exécuter des opérations sans bloquer le reste du programme."
    },
    {
        question: "Qu'est-ce qu'une Promesse en JavaScript ?",
        answer: "C'est un objet qui représente une valeur qui pourrait être disponible maintenant, dans le futur, ou jamais."
    },
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