import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { KTMonogramLogo } from './KTMonogramLogo';
import { CornerOrnaments, SideOrnaments, TwinRingsDivider } from './Decorations';

/**
 * FOOTER (LATAR MARUN GELAP #521321):
 * - Outro ucapan terima kasih
 * - Monogram emas KT
 * - Doa penutup Islami
 * - Ornamen sudut emas (opacity 0.85)
 * - Ornamen sisi kiri & kanan (≥1000px)
 * - Pembatas cincin kembar
 */
export function Footer() {
  const { couple } = weddingConfig;

  return (
    <footer className="wedding-section footer-darkmaroon-section">
      {/* Ornamen Sudut Emas */}
      <CornerOrnaments theme="gold-on-maroon" />

      {/* Ornamen Sisi Kiri & Kanan (≥1000px) */}
      <SideOrnaments theme="gold-on-maroon" />

      <div className="section-content-container footer-content">
        {/* 1. Label */}
        <p className="reveal-item section-label-gold">
          TERIMA KASIH
        </p>

        {/* 2. Judul Script Pinyon */}
        <h2 className="reveal-item footer-script-heading">
          We Can't Wait to Celebrate with You
        </h2>

        {/* 3. Pembatas Cincin Kembar */}
        <div className="reveal-item section-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* 4. Pesan Penghormatan */}
        <p className="reveal-item footer-thankyou-text">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu bagi kami berdua.
        </p>

        {/* Monogram Emas KT */}
        <div className="reveal-item footer-monogram-wrap">
          <KTMonogramLogo size={64} color="#C9A27A" leafColor="#E0C4A4" />
        </div>

        {/* Penutup Islami */}
        <p className="reveal-item footer-islamic-closing">
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </p>

        <p className="reveal-item footer-family-signature">
          Kami yang berbahagia,<br />
          <strong>{couple.groom.nickname} &amp; {couple.bride.nickname}</strong><br />
          Beserta Keluarga Besar
        </p>

        {/* Copyright */}
        <div className="reveal-item footer-bottom-copyright">
          <span>THE WEDDING OF KEMAL &amp; TRI YULI &bull; BREBES 2026</span>
        </div>
      </div>
    </footer>
  );
}
