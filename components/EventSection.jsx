import React from 'react';
import { MapPin } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { CornerOrnaments, SideOrnaments, TwinRingsDivider } from './Decorations';

/**
 * THE DETAILS - WAKTU & LOKASI (LATAR KREM GELAP #EFE4D8):
 * - Akad Nikah 16.00 WIB, Resepsi, alamat lengkap
 * - Tombol "View on Map"
 * - Dress Code
 * - 2 kolom pada layar ≥760px
 * - Ornamen sudut marun (opacity 0.30)
 * - Ornamen sisi kiri & kanan (≥1000px)
 * - Pembatas cincin kembar
 */
export function EventSection() {
  const { events, location } = weddingConfig;
  const akadEvent = events.find((e) => e.id === 'akad') || events[0];
  const resepsiEvent = events.find((e) => e.id === 'resepsi') || events[1];

  const mapUrl = location?.googleMapsUrl || 'https://maps.google.com';

  return (
    <section id="details" className="wedding-section details-darkcream-section">
      {/* Ornamen Sudut Marun */}
      <CornerOrnaments theme="maroon-on-cream" />

      {/* Ornamen Sisi Kiri & Kanan (≥1000px) */}
      <SideOrnaments theme="maroon-on-cream" />

      <div className="section-content-container">
        {/* 1. Label Uppercase Letter-Spacing .3em */}
        <p className="reveal-item section-label-maroon">
          WAKTU &amp; TEMPAT ACARA
        </p>

        {/* 2. Judul Script Pinyon */}
        <h2 className="reveal-item section-script-title">
          The Details
        </h2>

        {/* 3. Pembatas Cincin Kembar Emas */}
        <div className="reveal-item section-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* 4. Kartu Acara (2 Kolom pada Layar ≥760px) */}
        <div className="reveal-item events-two-col-grid">
          {/* AKAD NIKAH */}
          <div className="event-editorial-card">
            <span className="event-tag-badge">CEREMONY</span>
            <h3 className="event-title-serif">{akadEvent.title}</h3>
            
            <div className="event-schedule-highlight">
              <span className="event-date-row">{akadEvent.date}</span>
              <span className="event-time-row">{akadEvent.time}</span>
            </div>

            <div className="event-venue-info">
              <span className="event-venue-name">{akadEvent.venue}</span>
              <p className="event-address-detail">{akadEvent.address}</p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view-map"
              aria-label="Buka lokasi Akad Nikah di Google Maps"
            >
              <MapPin size={16} />
              <span>VIEW ON MAP</span>
            </a>
          </div>

          {/* RESEPSI PERNIKAHAN */}
          <div className="event-editorial-card">
            <span className="event-tag-badge">RECEPTION</span>
            <h3 className="event-title-serif">{resepsiEvent.title}</h3>

            <div className="event-schedule-highlight">
              <span className="event-date-row">{resepsiEvent.date}</span>
              <span className="event-time-row">{resepsiEvent.time}</span>
            </div>

            <div className="event-venue-info">
              <span className="event-venue-name">{resepsiEvent.venue}</span>
              <p className="event-address-detail">{resepsiEvent.address}</p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-view-map"
              aria-label="Buka lokasi Resepsi di Google Maps"
            >
              <MapPin size={16} />
              <span>VIEW ON MAP</span>
            </a>
          </div>
        </div>

        {/* 5. Bagian Dress Code */}
        <div className="reveal-item dresscode-container-card">
          <p className="dresscode-label-caps">PANDUAN BUSANA</p>
          <h3 className="dresscode-script-title">Dress Code</h3>

          {/* Palet Warna Swatch */}
          <div className="dresscode-swatches-palette" title="Palet Warna Pakaian Tamu">
            <div className="swatch-item">
              <span className="swatch-circle swatch-almond" />
              <span className="swatch-name">Cream</span>
            </div>
            <div className="swatch-item">
              <span className="swatch-circle swatch-softblush" />
              <span className="swatch-name">Blush</span>
            </div>
            <div className="swatch-item">
              <span className="swatch-circle swatch-terracotta" />
              <span className="swatch-name">Terracotta</span>
            </div>
            <div className="swatch-item">
              <span className="swatch-circle swatch-burgundy" />
              <span className="swatch-name">Maroon</span>
            </div>
            <div className="swatch-item">
              <span className="swatch-circle swatch-darkespresso" />
              <span className="swatch-name">Espresso</span>
            </div>
          </div>

          <p className="dresscode-style-type">Semi-Formal &amp; Batik</p>
          <p className="dresscode-description">
            Batik, Gaun, atau Busana Formal Bernuansa Selaras
          </p>
        </div>
      </div>
    </section>
  );
}
