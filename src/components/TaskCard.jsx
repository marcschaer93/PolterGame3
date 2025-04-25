// src/components/TaskCard.js
import React from "react";

function TaskCard({ content, customText }) {
  return (
    <div className="card task-card">
      {customText && <p>{customText}</p>}{" "}
      {/* Hier kannst du den benutzerdefinierten Text einfügen */}
      <p>{content}</p> {/* Aufgabe selbst */}
    </div>
  );
}

export default TaskCard;
