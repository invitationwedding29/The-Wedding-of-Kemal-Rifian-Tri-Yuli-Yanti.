import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { CornerOrnaments, SideOrnaments, TwinRingsDivider } from './Decorations';

/**
 * MOMEN KEBERSAMAAN KAMI (REVISI 2):
 * - HANYA satu carousel foto besar
 * - Klik foto (next slide)
 * - Panah kiri/kanan
 * - Geser di mobile (touch swipe support)
 * - Dots navigasi
 * - Penghitung "n / total"
 * - Caption foto
 * - Tombol perbesar (Lightbox modal)
 * - HAPUS deretan thumbnail di bawahnya
 */
export function PhotoGallery() {
  const { gallery, features } = weddingConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const timerRef = useRef(null);

  // Touch swipe support untuk smartphone
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalPhotos = gallery ? gallery.length : 0;

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalPhotos - 1 ? prev + 1 : 0));
  }, [totalPhotos]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPhotos - 1));
  }, [totalPhotos]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      showNext(); // Geser ke kiri -> foto berikutnya
    } else if (diff < -45) {
      showPrev(); // Geser ke kanan -> foto sebelumnya
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Rotasi otomatis setiap 4.5 detik
  useEffect(() => {
    if (isPaused || isLightboxOpen || totalPhotos <= 1) return;

    timerRef.current = setInterval(() => {
      showNext();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isLightboxOpen, totalPhotos, showNext, currentIndex]);

  if (!features.showGallery || !gallery || gallery.length === 0) {
    return null;
  }

  const currentPhoto = gallery[currentIndex];

  return (
    <section id="gallery" className="wedding-section gallery-cream-section">
      {/* Ornamen Sudut Marun */}
      <CornerOrnaments theme="maroon-on-cream" />

      {/* Ornamen Sisi Kiri & Kanan di Layar ≥1000px */}
      <SideOrnaments theme="maroon-on-cream" />

      <div className="section-content-container">
        {/* 1. Label Uppercase Letter-Spacing .3em */}
        <p className="reveal-item section-label-maroon">
          GALERI FOTO PERJALANAN CINTA
        </p>

        {/* 2. Judul Script Pinyon */}
        <h2 className="reveal-item section-script-title">
          Momen Kebersamaan Kami
        </h2>

        {/* 3. Pembatas Cincin Kembar Emas */}
        <div className="reveal-item section-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* 4. HANYA SATU CAROUSEL FOTO BESAR */}
        <div
          className="reveal-item single-carousel-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="carousel-main-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {gallery.map((photo, index) => (
              <div
                key={index}
                className={`carousel-slide-item ${index === currentIndex ? 'active' : ''}`}
                aria-hidden={index !== currentIndex}
                onClick={showNext}
                title="Klik untuk melihat foto berikutnya"
              >
                <img
                  src={photo.src}
                  alt={photo.caption || `Momen ${index + 1}`}
                  className="carousel-large-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}

            {/* Tombol Panah Kiri */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="carousel-nav-arrow arrow-prev"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Tombol Panah Kanan */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="carousel-nav-arrow arrow-next"
              aria-label="Foto selanjutnya"
            >
              <ChevronRight size={24} />
            </button>

            {/* Tombol Perbesar Foto (Modal Lightbox) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="carousel-zoom-btn"
              aria-label="Perbesar foto"
              title="Perbesar Tampilan Foto"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Bar Info: Penghitung "n / total" & Caption */}
          <div className="carousel-info-bar">
            <span className="carousel-count-pill">
              {currentIndex + 1} / {totalPhotos}
            </span>
            {currentPhoto.caption && (
              <p className="carousel-caption-desc">
                "{currentPhoto.caption}"
              </p>
            )}
          </div>

          {/* Indikator Titik (Dots) */}
          <div className="carousel-dots-list" role="tablist" aria-label="Navigasi foto">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot-btn ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Lihat foto ${idx + 1}`}
                role="tab"
                aria-selected={idx === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox Tampilan Penuh */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Tutup"
            >
              <X size={24} />
            </button>
            <button
              className="lightbox-arrow-btn lightbox-prev"
              onClick={showPrev}
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={28} />
            </button>
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption || 'Foto Terpilih'}
              className="lightbox-full-img"
            />
            {currentPhoto.caption && (
              <p className="lightbox-caption-text">{currentPhoto.caption}</p>
            )}
            <button
              className="lightbox-arrow-btn lightbox-next"
              onClick={showNext}
              aria-label="Foto selanjutnya"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
