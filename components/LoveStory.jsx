import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

export function LoveStory() {
  const { loveStory, features } = weddingConfig;

  if (!features.showStory || !loveStory || loveStory.length === 0) {
    return null;
  }

  return (
    <section id="story" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">KISAH KITA</span>
          <h2 className="section-title">Perjalanan Cinta</h2>
          <p className="section-desc">
            Sepenggal jejak langkah yang mengantarkan kami hingga ke gerbang pernikahan.
          </p>
        </div>

        <div className="card">
          <div className="timeline">
            {loveStory.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title font-serif">{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
