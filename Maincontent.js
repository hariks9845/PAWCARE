import React, { useState } from 'react';

const Maincontent = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById('promo-video');
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <main>
      <div className="video-section">
        <video id="promo-video" src="path-to-your-video.mp4" autoPlay loop muted></video>
        <div className="video-overlay">
          <h1>Making Pets Happy</h1>
          <button onClick={toggleVideo}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default Maincontent;
