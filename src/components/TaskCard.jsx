import React from "react";

function TaskCard({ content, customText }) {
  return (
    <div
      className="card task-card"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff", // Helle Schrift auf dunklem Hintergrund
      }}
    >
      <div
        style={{
          padding: "20px",
          backgroundColor: "#1e1e1e", // Dunkler Hintergrund für die Karte
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Schatten für den 3D-Effekt
          maxWidth: "90%", // Maximale Breite für bessere Lesbarkeit
        }}
      >
        <h2>{customText || "Aufgabe:"}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default TaskCard;
