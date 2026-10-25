import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { useCountdown } from '../hooks/useCountdown';
import { CornerOrnaments, SideOrnaments, TwinRingsDivider, FallingPetals } from './Decorations';
import { KTMonogramLogo } from './KTMonogramLogo';

/**
 * HERO SECTION (LATAR MARUN #6B1A2C):
 * - 12 kelopak emas jatuh pelan (animasi CSS 9-17 detik)
 * - Ornamen sudut emas di 4 sudut (opacity 0.85)
 * - Ornamen sisi kiri & kanan (≥1000px)
 * - Hierarki: Label → Judul Script (Pinyon Script) → Pembatas Cincin Kembar → Tanggal & Countdown
 */
export function HeroSection() {
  const { couple, targetDate, mainDate } = weddingConfig;
  const { days, hours, minutes, seconds, isPassed } = useCountdown(targetDate);

  return (
    <header id="hero" className="wedding-section hero-maroon-section">
      {/* 12 Kelopak Emas Jatuh Pelan */}
      <FallingPetals />

      {/* Ornamen Sudut Garis Emas */}
      <CornerOrnaments theme="gold-on-maroon" />

      {/* Ornamen Sisi Kiri & Kanan (≥1000px) */}
      <SideOrnaments theme="gold-on-maroon" />

      <div className="section-content-container hero-content">
        {/* Monogram Emas "KT" */}
        <div className="reveal-item hero-monogram-wrap">
          <KTMonogramLogo size={76} color="#C9A27A" leafColor="#E0C4A4" />
        </div>

        {/* 1. Label Uppercase Letter-Spacing .3em */}
        <p className="reveal-item section-label-gold">
          THE WEDDING CELEBRATION OF
        </p>

        {/* 2. Judul Script (Pinyon Script fluid clamp) */}
        <h1 className="reveal-item hero-script-title">
          {couple.groom.nickname} <span className="hero-script-amp">&amp;</span> {couple.bride.nickname}
        </h1>

        {/* 3. Pembatas Cincin Kembar Emas */}
        <div className="reveal-item hero-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* Nama Lengkap Kedua Mempelai */}
        <p className="reveal-item hero-fullnames">
          {couple.groom.fullName} &amp; {couple.bride.fullName}
        </p>

        {/* Tanggal Utama Pernikahan */}
        <div className="reveal-item hero-date-banner">
          <span className="hero-date-text">{mainDate}</span>
          <span className="hero-location-text">Brebes, Jawa Tengah</span>
        </div>

        {/* Hitung Mundur (Hari, Jam, Menit, Detik) */}
        <div className="reveal-item hero-countdown-block">
          <p className="countdown-eyebrow">COUNTING DOWN TO THE BLESSED DAY</p>

          {isPassed ? (
            <p className="countdown-congrats">
              Alhamdulillah, Hari Bahagia Kami Telah Tiba!
            </p>
          ) : (
            <div className="countdown-grid">
              <div className="countdown-item">
                <span className="countdown-val">{String(days).padStart(2, '0')}</span>
                <span className="countdown-unit">HARI</span>
              </div>
              <span className="countdown-sep" aria-hidden="true">:</span>
              <div className="countdown-item">
                <span className="countdown-val">{String(hours).padStart(2, '0')}</span>
                <span className="countdown-unit">JAM</span>
              </div>
              <span className="countdown-sep" aria-hidden="true">:</span>
              <div className="countdown-item">
                <span className="countdown-val">{String(minutes).padStart(2, '0')}</span>
                <span className="countdown-unit">MENIT</span>
              </div>
              <span className="countdown-sep" aria-hidden="true">:</span>
              <div className="countdown-item">
                <span className="countdown-val">{String(seconds).padStart(2, '0')}</span>
                <span className="countdown-unit">DETIK</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
