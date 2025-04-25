// src/components/MemoryTriggerCard.js
import React, { useState } from "react";
import MemoryGame from "./MemoryGame"; // Importiere das Memory-Spiel
import { Card, CardContent, Typography } from "@mui/material";

const MemoryTriggerCard = ({ content, memoryImages, title }) => {
  const [showMemoryGame, setShowMemoryGame] = useState(false);

  const handleClick = () => {
    setShowMemoryGame(true); // Memory-Spiel anzeigen
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        backgroundColor: "#333", // Dunkler Hintergrund im Stil der App
        boxShadow: 3,
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ padding: 2 }}>
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <img
            src={content}
            alt="Memory Trigger"
            style={{
              objectFit: "cover", // Bild füllt den Container aus
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
        <Typography
          sx={{ color: "#fff", textAlign: "center", marginTop: "10px" }}
        >
          {title || "Memory-Spiel starten"}
        </Typography>
      </CardContent>

      {/* Zeige Memory-Spiel, wenn Karte geklickt wird */}
      {showMemoryGame && (
        <div className="memory-game-container">
          <button onClick={() => setShowMemoryGame(false)}>Schließen</button>
          <MemoryGame images={memoryImages} />
        </div>
      )}
    </Card>
  );
};

export default MemoryTriggerCard;
