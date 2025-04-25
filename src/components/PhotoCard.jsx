import React from "react";

function PhotoCard({ content, customText }) {
  return (
    <div className="card photo-card" style={{ width: "100%", height: "100%" }}>
      <img
        src={content}
        alt={customText || "Foto"}
        style={{
          objectFit: "cover", // Bild füllt den Container aus
          width: "100%", // Volle Breite
          height: "100%", // Volle Höhe
        }}
      />
    </div>
  );
}

export default PhotoCard;
