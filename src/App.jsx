import React, { useState } from "react";
import { Button, Box, Container, Typography } from "@mui/material";
import { initialCards } from "./CardsData"; // Deine Karten-Daten

import TaskCard from "./components/TaskCard";
import PhotoCard from "./components/PhotoCard";
import VideoCard from "./components/VideoCard";

function App() {
  const [cards, setCards] = useState(initialCards);
  const [currentCard, setCurrentCard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Funktion, um eine zufällige Karte zu ziehen
  const drawRandomCard = () => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (cards.length === 0) {
      setGameOver(true); // Spiel beendet, wenn keine Karten mehr übrig sind
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
    <Container
      maxWidth="xl" // Setze den Container auf xl für größere Breite
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
        backgroundColor: "#121212", // Dunkler Hintergrund
        color: "#fff", // Helle Schriftfarbe
      }}
    >
      {/* Titel, wenn das Spiel noch nicht gestartet wurde */}
      {!gameStarted && (
        <Typography variant="h4" align="center" gutterBottom>
          Polterabend - Zieh eine Karte!
        </Typography>
      )}

      {/* Karten-Anzeige */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          maxHeight: "80%",
          width: "100%",
          minHeight: "500px",
          maxHeight: "800px",
          overflow: "hidden",
        }}
      >
        {gameOver ? (
          <Typography variant="h5" align="center" sx={{ color: "#76c7c0" }}>
            Spiel beendet! 🎉
          </Typography>
        ) : (
          currentCard && (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #444", // Dunkle Karte
                borderRadius: "8px",
                backgroundColor: "#1e1e1e", // Dunkle Kartenfarbe
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)", // Schatten für den 3D-Effekt
              }}
            >
              {/* Karteninhalt */}
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
            </Box>
          )
        )}
      </Box>

      {/* Button für die nächste Karte */}
      {!gameOver && (
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingBottom: 1 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={drawRandomCard}
            sx={{
              padding: "6px 16px",
              backgroundColor: "#76c7c0", // Akzentfarbe für den Button
              "&:hover": {
                backgroundColor: "#5da8a1", // Dunklerer Button bei Hover
              },
            }}
          >
            Nächste Karte ziehen
          </Button>
        </Box>
      )}

      {/* Hinweise und Textfeld */}
      <Box sx={{ display: "flex", justifyContent: "center", padding: 1 }}>
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: "0.875rem" }}
        >
          {gameOver
            ? "Das Spiel ist zu Ende. Viel Spaß auf deinem Polterabend!"
            : "Zieh eine Karte und lass dich überraschen!"}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
