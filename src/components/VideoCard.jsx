import React from "react";

function VideoCard({ content, customText }) {
  return (
    <div className="card video-card" style={{ width: "100%", height: "100%" }}>
      <iframe
        width="100%" // Vollständige Breite
        height="100%" // Vollständige Höhe
        src={`https://www.youtube.com/embed/${content.split("v=")[1]}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoCard;
