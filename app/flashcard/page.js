"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';

const FlashCard = ({ question, answer, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      setShowAnswer(!showAnswer);
    }
  };

  return (
    <div 
      className="p-6 shadow-inner shadow-[#141414] bg-[#262626] bg-opacity-70 rounded-md w-full max-w-2xl flex flex-col text-white font-montserrat hover:-translate-x-1 hover:translate-y-1 transition-all duration-200 ease-in-out cursor-pointer relative"
      onClick={handleClick}
    >
      <button
        onClick={onDelete}
        title='Delete card'
        className="absolute top-2 right-2 p-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        &times;
      </button>
      <div className="w-full h-64 flex flex-col items-center justify-center px-4 overflow-y-auto">
        <p className="text-xl sm:text-2xl font-semibold text-center break-words mb-4">{question}</p>
        {showAnswer ? (
          <p className="text-xl sm:text-2xl font-semibold text-center break-words text-green-400">{answer}</p>
        ) : (
          <p className="text-lg text-center text-gray-400 mt-4">Click to reveal the answer</p>
        )}
      </div>
    </div>
  );
};

const FlashCardPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flashCards, setFlashCards] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('flashCards')) || [];
    setFlashCards(storedCards);
    if (storedCards.length === 0) {
      setCurrentCard(0); 
    }
    const tutorialShown = localStorage.getItem('tutorialShown');
  }, []);

  useEffect(() => {
    if (flashCards.length === 0) return;
    localStorage.setItem('flashCards', JSON.stringify(flashCards));
  }, [flashCards]);

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev === 0 ? flashCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev === flashCards.length - 1 ? 0 : prev + 1));
  };

  const addNewCard = () => {
    if (newQuestion && newAnswer) {
      const newCard = { question: newQuestion, answer: newAnswer };
      const updatedCards = [...flashCards, newCard];
      setFlashCards(updatedCards);
      setNewQuestion('');
      setNewAnswer('');

      if (flashCards.length === 0) {
        setCurrentCard(0);
      }
    }
  };

  const handleDelete = (index) => {
    setFlashCards((prevCards) => {
      const updatedCards = prevCards.filter((_, cardIndex) => cardIndex !== index);
      if (index === currentCard && updatedCards.length > 0) {
        setCurrentCard((prev) => (prev === 0 ? 0 : prev - 1));
      }
      return updatedCards;
    });
  };


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-t from-[#131417] to-green-500/30 from-90%">
      <header className="w-full p-4">
        <h1 className="font-reddit text-4xl md:text-6xl text-white font-semibold text-center">
          <span className="text-[#278E46]">F</span>lash
          <span className="text-[#278E46]">C</span>ards
        </h1>
        <h3 className="font-reddit text-white text-xl md:text-2xl text-center mt-2">
          Study and Learn
        </h3>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center gap-8 p-4">
        {flashCards.length > 0 && (
          <>
            <FlashCard 
              key={currentCard}
              question={flashCards[currentCard]?.question} 
              answer={flashCards[currentCard]?.answer} 
              onDelete={() => handleDelete(currentCard)}
            />
            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={handlePrevious}
                title='Previous'
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <ArrowLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                title='Next'
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </>
        )}
        <div className="w-full max-w-2xl p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Add a New Flashcard</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-green-400 text-lg font-medium mb-2" htmlFor="newQuestion">
                Question
              </label>
              <input 
                id="newQuestion"
                type="text"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white transition-all duration-300 ease-in-out hover:border-green-500 focus:outline-none focus:border-green-500"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Enter the question"
              />
            </div>
            <div>
              <label className="block text-green-400 text-lg font-medium mb-2" htmlFor="newAnswer">
                Answer
              </label>
              <textarea 
                id="newAnswer"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white transition-all duration-300 ease-in-out hover:border-green-500 focus:outline-none focus:border-green-500"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Enter the answer"
              />
            </div>
            <button 
              type="button" 
              onClick={addNewCard}
              className="w-full p-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-xl font-semibold rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-green-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Add Flashcard
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FlashCardPage;