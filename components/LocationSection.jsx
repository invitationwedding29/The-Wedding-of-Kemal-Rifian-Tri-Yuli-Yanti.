import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export function LocationSection() {
  const { location } = weddingConfig;

  return (
    <section id="location" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PETA LOKASI</span>
          <h2 className="section-title">Denah Menuju Lokasi</h2>
          <p className="section-desc">
            Panduan navigasi untuk memudahkan Anda menuju ke lokasi acara pernikahan.
          </p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <MapPin size={24} style={{ color: 'var(--color-sage)', flexShrink: 0, marginTop: '0.2rem' }} />
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>
                {location.venue}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                {location.address}
              </p>
            </div>
          </div>

          {/* Iframe Peta Google Maps Embed */}
          {location.embedUrl && (
            <div className="map-frame-wrapper">
              <iframe
                title="Peta Lokasi Pernikahan"
                src={location.embedUrl}
                className="map-frame"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.25rem' }}>
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: '1 1 200px' }}
            >
              <ExternalLink size={16} />
              <span>Buka Google Maps</span>
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.venue + ' ' + location.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ flex: '1 1 200px' }}
            >
              <Navigation size={16} />
              <span>Petunjuk Arah</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
