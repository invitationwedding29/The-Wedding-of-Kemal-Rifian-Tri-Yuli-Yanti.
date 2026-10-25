import React, { useState } from 'react';
import { KTMonogramLogo } from './KTMonogramLogo';
import { CornerOrnaments, ConcentricGoldRings, FallingPetals } from './Decorations';

/**
 * COVER AMPLOP (REVISI 1):
 * - Tetap HANYA amplop marun + segel "KT" tanpa teks/tombol
 * - Dekorasi SVG inline di latar belakang (pointer-events: none, di bawah amplop):
 *   1. Ornamen bunga-daun garis emas (#C9A27A, stroke 1.2px) di 4 sudut (clamp(110px,26vw,340px), opacity .85, dicerminkan).
 *   2. Lingkaran emas tipis konsentris di belakang amplop (diameter min(130vw,920px), border 1px emas opacity .5, ring luar/dalam opacity .06).
 *   3. 12 kelopak emas jatuh pelan (animasi CSS 9-17 detik, acak posisi & delay).
 * - Tetap: amplop melayang, segel berdenyut, transisi buka halus:
 *   (tutup terbuka 1.1s → kartu naik → cover scale 1.25 + blur + fade 1.5s → konten fade-in).
 */
export function WeddingCover({ isOpened, onOpen }) {
  const [animStep, setAnimStep] = useState('idle'); // 'idle' | 'opening' | 'opened'

  const handleEnvelopeClick = () => {
    if (animStep !== 'idle' || isOpened) return;

    // Cek prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimStep('opened');
      onOpen();
      return;
    }

    setAnimStep('opening');

    // Mulai fade-in konten utama sedikit sebelum cover menghilang sempurna
    setTimeout(() => {
      onOpen();
    }, 2400);

    // Cover selesai fade out dan menghilang sempurna
    setTimeout(() => {
      setAnimStep('opened');
    }, 3400);
  };

  if (animStep === 'opened' || isOpened) {
    return null;
  }

  const isOpening = animStep === 'opening';

  return (
    <div
      className={`fullscreen-envelope-cover ${isOpening ? 'is-opening' : ''}`}
      onClick={handleEnvelopeClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleEnvelopeClick();
        }
      }}
      aria-label="Buka Amplop Undangan Kemal & Tri Yuli"
    >
      {/* 1. 12 Kelopak Emas Jatuh Pelan di Cover */}
      <FallingPetals />

      {/* 2. Ornamen Bunga-Daun Garis Emas di 4 Sudut (clamp 110px-340px, opacity .85) */}
      <CornerOrnaments theme="cover-gold" isCover={true} />

      {/* 3. Lingkaran Emas Tipis Konsentris di Belakang Amplop */}
      <ConcentricGoldRings />

      {/* 3D Scene Container (Amplop Berada di Atas Dekorasi Latar) */}
      <div className="envelope-3d-scene">
        {/* Amplop Marun yang Melayang Pelan */}
        <div className={`royal-envelope ${isOpening ? 'envelope-animating' : ''}`}>
          {/* Bagian Belakang Amplop */}
          <div className="env-back-panel" />

          {/* Kartu Undangan di Dalam Amplop yang Naik Halus */}
          <div className="env-inner-card">
            <div className="env-card-border">
              <span className="env-card-header">WEDDING INVITATION</span>
              <div className="env-card-monogram">
                <KTMonogramLogo size={48} color="#C9A27A" leafColor="#C9A27A" />
              </div>
              <h2 className="env-card-names">Kemal &amp; Tri Yuli</h2>
              <span className="env-card-date">29 . 11 . 2026</span>
            </div>
          </div>

          {/* Sisi Kiri & Kanan Lipatan Amplop */}
          <div className="env-left-flap" />
          <div className="env-right-flap" />

          {/* Sisi Bawah Lipatan Amplop */}
          <div className="env-bottom-flap" />

          {/* Tutup Atas Amplop (RotateX 180deg) */}
          <div className="env-top-flap">
            {/* Segel Emas "KT" di Ujung Tutup (Memudar 0.5s) */}
            <div className="gold-wax-seal" title="Segel Emas KT">
              <div className="wax-seal-inner">
                <span className="wax-seal-initials">KT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
