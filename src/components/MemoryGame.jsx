// src/components/MemoryGame.js
import React, { useState, useEffect } from "react";
import "./memory-game.css"; // Verknüpft das CSS für das Memory-Spiel

const MemoryGame = ({ images }) => {
  const MemoryGame = ({ images }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    // Mische die Karten zu Beginn
    useEffect(() => {
      const shuffledCards = shuffle(images.concat(images)); // Verdopple die Bilder für Paare
      setCards(
        shuffledCards.map((image, index) => ({
          id: index,
          image,
          isFlipped: false,
          isMatched: false,
        }))
      );
    }, [images]);

    // Karten mischen
    const shuffle = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };

    // Karte umdrehen
    const flipCard = (index) => {
      if (
        flippedCards.length < 2 &&
        !cards[index].isFlipped &&
        !cards[index].isMatched &&
        !gameOver
      ) {
        const updatedCards = [...cards];
        updatedCards[index].isFlipped = true;
        setFlippedCards([...flippedCards, updatedCards[index]]);

        setCards(updatedCards);
      }
    };

    // Überprüfe, ob die beiden Karten übereinstimmen
    useEffect(() => {
      if (flippedCards.length === 2) {
        if (flippedCards[0].image === flippedCards[1].image) {
          setMatchedCards([...matchedCards, flippedCards[0].image]);
        } else {
          setTimeout(() => {
            const updatedCards = cards.map((card) => {
              if (
                card.id === flippedCards[0].id ||
                card.id === flippedCards[1].id
              ) {
                card.isFlipped = false;
              }
              return card;
            });
            setCards(updatedCards);
          }, 1000);
        }
        setFlippedCards([]);
      }
    }, [flippedCards, cards, matchedCards]);

    // Wenn alle Karten übereinstimmen, ist das Spiel vorbei
    useEffect(() => {
      if (matchedCards.length === images.length) {
        setGameOver(true);
      }
    }, [matchedCards, images]);

    return (
      <div className="memory-game">
        <h2>{gameOver ? "Spiel beendet! 🎉" : "Finde alle Paare!"}</h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card ${
                card.isFlipped || card.isMatched ? "flipped" : ""
              }`}
              onClick={() => flipCard(index)}
            >
              <img
                src={
                  card.isFlipped || card.isMatched
                    ? card.image
                    : "/path/to/backside-image.jpg"
                }
                alt="Memory Card"
                className="card-image"
              />
            </div>
          ))}
        </div>
        <div className="footer">
          {gameOver && (
            <button onClick={() => window.location.reload()}>
              Neues Spiel starten
            </button>
          )}
        </div>
      </div>
    );
  };

  // Dein Memory-Spiel Code (wie im vorherigen Beispiel)
};

export default MemoryGame;
