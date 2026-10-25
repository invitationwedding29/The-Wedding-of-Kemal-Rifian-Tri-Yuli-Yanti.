import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { CornerOrnaments, SideOrnaments, TwinRingsDivider } from './Decorations';

/**
 * THE HAPPY COUPLE (REVISI 2):
 * Berurutan persis sesuai instruksi:
 * 1. Label "MEMPELAI PENGANTIN"
 * 2. Judul "The Happy Couple"
 * 3. Pembatas cincin kembar
 * 4. Kalimat "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud melangsungkan syukuran pernikahan putra-putri kami:"
 * 5. Kemal Rifian / MEMPELAI PRIA / "Putra Pertama dari:" Almarhum Bpk. Salim / & / Ibu Kushartini
 * 6. Simbol "&"
 * 7. Tri Yuli Yanti / MEMPELAI WANITA / "Putri Kedua dari:" Bpk. Dartim / & / Ibu Waskiyah
 * 8. Kutipan Suci QS. Ar-Rum: 21 di bagian penutup section
 */
export function CoupleProfile() {
  const { groom, bride, quote } = weddingConfig.couple;

  return (
    <section id="couple" className="wedding-section couple-darkcream-section">
      {/* Ornamen Sudut Marun */}
      <CornerOrnaments theme="maroon-on-cream" />

      {/* Ornamen Sisi Kiri & Kanan di Layar ≥1000px */}
      <SideOrnaments theme="maroon-on-cream" />

      <div className="section-content-container">
        {/* 1. Label MEMPELAI PENGANTIN */}
        <p className="reveal-item section-label-maroon">
          MEMPELAI PENGANTIN
        </p>

        {/* 2. Judul The Happy Couple */}
        <h2 className="reveal-item section-script-title">
          The Happy Couple
        </h2>

        {/* 3. Pembatas Cincin Kembar */}
        <div className="reveal-item section-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* 4. Kalimat Pengantar */}
        <p className="reveal-item couple-intro-text">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud melangsungkan syukuran pernikahan putra-putri kami:
        </p>

        {/* 5, 6, 7. Layout Mempelai Pria, Simbol &, dan Mempelai Wanita */}
        <div className="reveal-item couple-three-col-layout">
          {/* Mempelai Pria */}
          <div className="couple-profile-card">
            <div className="couple-photo-frame">
              <img src={groom.photo} alt={groom.fullName} className="couple-photo-img" />
            </div>
            <h3 className="couple-script-name">{groom.fullName}</h3>
            <p className="couple-badge-role">MEMPELAI PRIA</p>
            <p className="couple-parents-text">
              Putra Pertama dari:<br />
              <strong className="parent-highlight">{groom.father}</strong>
              <br />&amp;<br />
              <strong className="parent-highlight">{groom.mother}</strong>
            </p>
          </div>

          {/* Simbol "&" di Tengah */}
          <div className="couple-center-divider" aria-hidden="true">
            <span className="center-divider-line" />
            <span className="center-script-amp">&amp;</span>
            <span className="center-divider-line" />
          </div>

          {/* Mempelai Wanita */}
          <div className="couple-profile-card">
            <div className="couple-photo-frame">
              <img src={bride.photo} alt={bride.fullName} className="couple-photo-img" />
            </div>
            <h3 className="couple-script-name">{bride.fullName}</h3>
            <p className="couple-badge-role">MEMPELAI WANITA</p>
            <p className="couple-parents-text">
              Putri Kedua dari:<br />
              <strong className="parent-highlight">{bride.father}</strong>
              <br />&amp;<br />
              <strong className="parent-highlight">{bride.mother}</strong>
            </p>
          </div>
        </div>

        {/* 8. Kutipan Suci QS. Ar-Rum: 21 */}
        {quote && (
          <div className="reveal-item couple-sacred-quote-box">
            <p className="quote-arabic-text" dir="rtl" lang="ar">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="quote-translation-text">
              "{quote.text}"
            </p>
            <span className="quote-source-badge">— {quote.source}</span>
          </div>
        )}
      </div>
    </section>
  );
}
