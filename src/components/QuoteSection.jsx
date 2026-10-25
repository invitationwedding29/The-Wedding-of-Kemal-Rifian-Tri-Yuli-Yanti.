import React from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { CornerOrnaments, TwinRingsDivider } from './Decorations';

/**
 * KUTIPAN SUCI QS. AR-RUM: 21 (LATAR KREM #F7F1EA):
 * - Ornamen sudut marun (opacity 0.20)
 * - Pembatas cincin kembar
 * - Hierarki: Label → Judul Script → Pembatas → Teks Kutipan
 */
export function QuoteSection() {
  const { quote } = weddingConfig.couple;

  if (!quote) return null;

  return (
    <section id="quote" className="wedding-section quote-cream-section">
      {/* Ornamen Sudut Marun */}
      <CornerOrnaments theme="maroon-on-cream" />

      <div className="section-content-container quote-container">
        {/* 1. Label Uppercase Letter-Spacing .3em */}
        <p className="reveal-item section-label-maroon">
          KUTIPAN AYAT SUCI
        </p>

        {/* 2. Judul Script Pinyon */}
        <h2 className="reveal-item section-script-title">
          {quote.source || 'Ar-Rum : 21'}
        </h2>

        {/* 3. Pembatas Cincin Kembar Emas */}
        <div className="reveal-item section-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* 4. Isi Kutipan Suci */}
        <div className="reveal-item quote-sacred-box">
          <p className="quote-arabic-text" dir="rtl" lang="ar">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="quote-translation-text">
            "{quote.text}"
          </p>
          <span className="quote-source-badge">— {quote.source}</span>
        </div>
      </div>
    </section>
  );
}
