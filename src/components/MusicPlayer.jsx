import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export function MusicPlayer({ shouldPlay, onToggle }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (audioRef.current && shouldPlay) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Autoplay prevented or audio load issue:', err);
          setIsPlaying(false);
        });
    }
  }, [shouldPlay]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }

    if (onToggle) onToggle(!isPlaying);
  };

  if (hasError) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingConfig.music.url}
        loop
        preload="auto"
        onError={() => setHasError(true)}
      />

      <button
        onClick={togglePlayback}
        className="audio-toggle-btn"
        aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
        title={isPlaying ? 'Jeda Musik Latar' : 'Putar Musik Latar'}
      >
        {isPlaying ? (
          <Music size={20} className="spinning" />
        ) : (
          <VolumeX size={20} />
        )}
      </button>
    </>
  );
}
