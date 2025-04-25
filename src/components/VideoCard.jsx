// components/VideoCard.js
import React from "react";

function VideoCard({ content, customText }) {
  return (
    <div className="card video-card">
      <h2>Video:</h2>
      <a
        href={content}
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-link"
      >
        {customText ? customText : "Schau dir das YouTube-Video an!"}
      </a>
      <div>
        {/* Optional: Video als eingebetteten Player anzeigen */}
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${content.split("v=")[1]}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoCard;
