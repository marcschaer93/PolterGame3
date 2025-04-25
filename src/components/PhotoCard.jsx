// src/components/PhotoCard.js
import React from "react";

function PhotoCard({ content, customText }) {
  return (
    <div className="card photo-card">
      {customText && <p>{customText}</p>}{" "}
      {/* Hier kannst du den benutzerdefinierten Text einfügen */}
      <img src={content} alt="Foto" className="card-img" />
    </div>
  );
}

export default PhotoCard;
