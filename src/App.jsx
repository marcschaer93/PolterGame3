import React, { useState } from "react";
import "./App.css";
import { initialCards } from "./CardsData"; // Importiere die initialCards

import TaskCard from "./components/TaskCard"; // Importiere TaskCard
import PhotoCard from "./components/PhotoCard"; // Importiere PhotoCard
import VideoCard from "./components/VideoCard"; // Importiere VideoCard

function App() {
  // Zustand für die angezeigte Karte und den verbleibenden Karten
  const [cards, setCards] = useState(initialCards);
  const [currentCard, setCurrentCard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Zustand, ob das Spiel gestartet wurde

  // Funktion, um eine zufällige Karte zu ziehen
  const drawRandomCard = () => {
    if (!gameStarted) {
      setGameStarted(true); // Setze den Zustand auf 'true', wenn das Spiel startet
    }

    if (cards.length === 0) {
      setGameOver(true); // Wenn keine Karten mehr übrig sind, beende das Spiel
      return;
    }

    const randomIndex = Math.floor(Math.random() * cards.length);
    const newCard = cards[randomIndex];
    setCurrentCard(newCard);

    // Entferne die gezogene Karte aus dem Stapel
    const updatedCards = cards.filter((card, index) => index !== randomIndex);
    setCards(updatedCards);
  };

  return (
    <div className="container">
      {!gameStarted && <h1>Polterabend - Zieh eine Karte!</h1>}{" "}
      {/* Zeige den Titel nur, wenn das Spiel noch nicht gestartet wurde */}
      <div className="card-display">
        {gameOver ? (
          <h2>Spiel beendet! 🎉</h2>
        ) : (
          currentCard && (
            <>
              {currentCard.type === "task" && (
                <TaskCard
                  content={currentCard.content}
                  customText={currentCard.customText}
                />
              )}

              {currentCard.type === "photo" && (
                <PhotoCard
                  content={currentCard.content}
                  customText={currentCard.customText}
                />
              )}

              {currentCard.type === "youtube" && (
                <VideoCard
                  content={currentCard.content}
                  customText={currentCard.customText}
                />
              )}
            </>
          )
        )}
      </div>
      {!gameOver && <button onClick={drawRandomCard}>Karte ziehen</button>}
    </div>
  );
}

export default App;
