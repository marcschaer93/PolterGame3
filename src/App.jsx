import React, { useState } from "react";
import "./App.css";

function App() {
  // Karten-Daten
  const initialCards = [
    {
      type: "task",
      content: "Mache einen Handstand für 10 Sekunden!",
    },
    {
      type: "task",
      content: "Erzähle einen peinlichen Witz!",
    },
    {
      type: "photo",
      content: "https://example.com/photo.jpg", // Hier einen echten Link zu einem Bild einfügen
    },
    {
      type: "youtube",
      content: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Beispiel YouTube-Link
    },
  ];

  // Zustand für die angezeigte Karte und den verbleibenden Karten
  const [cards, setCards] = useState(initialCards);
  const [currentCard, setCurrentCard] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Funktion, um eine zufällige Karte zu ziehen
  const drawRandomCard = () => {
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
      <h1>Polterabend - Zieh eine Karte!</h1>

      <div className="card-display">
        {gameOver ? (
          <h2>Spiel beendet! 🎉</h2>
        ) : (
          currentCard && (
            <>
              {currentCard.type === "task" && (
                <div className="card task-card">
                  <h2>Aufgabe:</h2>
                  <p>{currentCard.content}</p>
                </div>
              )}

              {currentCard.type === "photo" && (
                <div className="card photo-card">
                  <h2>Foto:</h2>
                  <img
                    src={currentCard.content}
                    alt="Foto"
                    className="card-img"
                  />
                </div>
              )}

              {currentCard.type === "youtube" && (
                <div className="card video-card">
                  <h2>Video:</h2>
                  <iframe
                    width="560"
                    height="315"
                    src={currentCard.content}
                    frameBorder="0"
                    allowFullScreen
                    title="YouTube Video"
                    className="video-frame"
                  ></iframe>
                </div>
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
