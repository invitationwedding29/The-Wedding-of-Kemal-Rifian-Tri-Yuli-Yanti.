import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { weddingConfig } from '../config/weddingConfig';

export function Countdown() {
  const { days, hours, minutes, seconds, isPassed } = useCountdown(weddingConfig.targetDate);

  return (
    <section className="editorial-countdown-section">
      <div className="countdown-banner-card">
        {/* Calligraphy Title */}
        <h2 className="countdown-script-title">Countdown</h2>

        {isPassed ? (
          <p className="countdown-passed-text">
            Alhamdulillah, Hari Bahagia Kami Telah Tiba!
          </p>
        ) : (
          <div className="countdown-digits-row">
            <div className="countdown-digit-unit">
              <span className="digit-num">{String(days).padStart(2, '0')}</span>
              <span className="digit-lbl">HARI</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-digit-unit">
              <span className="digit-num">{String(hours).padStart(2, '0')}</span>
              <span className="digit-lbl">JAM</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-digit-unit">
              <span className="digit-num">{String(minutes).padStart(2, '0')}</span>
              <span className="digit-lbl">MENIT</span>
            </div>
            <span className="countdown-colon">:</span>
            <div className="countdown-digit-unit">
              <span className="digit-num">{String(seconds).padStart(2, '0')}</span>
              <span className="digit-lbl">DETIK</span>
            </div>
          </div>
        )}

        {/* Delicate Floral Ornament Divider */}
        <div className="countdown-branch-divider" aria-hidden="true">
          <svg viewBox="0 0 160 20" width="120" height="15" fill="none" stroke="currentColor">
            <path d="M10 10 Q40 4 80 10 Q120 16 150 10" strokeWidth="1" strokeLinecap="round" />
            <path d="M40 7 Q44 2 50 6" strokeWidth="0.8" />
            <path d="M60 8 Q65 14 70 9" strokeWidth="0.8" />
            <path d="M90 11 Q95 5 100 10" strokeWidth="0.8" />
            <path d="M110 12 Q115 17 120 12" strokeWidth="0.8" />
            <circle cx="80" cy="10" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
