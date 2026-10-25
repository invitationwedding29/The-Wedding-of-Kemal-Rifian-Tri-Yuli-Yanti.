import React, { useState, useCallback } from 'react';
import { WeddingCover } from './components/WeddingCover';
import { HeroSection } from './components/HeroSection';
import { CoupleProfile } from './components/CoupleProfile';
import { PhotoGallery } from './components/PhotoGallery';
import { EventSection } from './components/EventSection';
import { WishesSection } from './components/WishesSection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [isCoverOpened, setIsCoverOpened] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Hook scroll reveal dengan IntersectionObserver
  useScrollReveal(isCoverOpened);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  const handleOpenInvitation = () => {
    setIsCoverOpened(true);
    setShouldPlayMusic(true);
  };

  return (
    <div className="wedding-app-wrapper">
      {/* 
        1. COVER AMPLOP (REVISI 1):
        Fullscreen, tetap HANYA amplop marun + segel emas "KT", tanpa teks.
        Dekorasi latar: ornamen sudut clamp(110-340px), lingkaran konsentris emas, 12 kelopak jatuh.
      */}
      <WeddingCover isOpened={isCoverOpened} onOpen={handleOpenInvitation} />

      {/* 
        KONTEN UTAMA (URUTAN WAJIB REVISI 2):
        Hero → The Happy Couple → Momen Kebersamaan Kami → The Details → Ucapan & Doa → Footer
        Fade-in 1.4s saat cover terbuka.
      */}
      <main
        id="main-content"
        className={`wedding-main-canvas ${isCoverOpened ? 'is-visible' : 'is-hidden'}`}
        aria-hidden={!isCoverOpened}
      >
        {/* 1. Hero (nama, tanggal, countdown hari/jam/menit/detik) - Latar Marun #6B1A2C */}
        <HeroSection />

        {/* 2. The Happy Couple (mempelai pria & wanita, nama orang tua, & divider, QS Ar-Rum) - Latar Krem #F7F1EA */}
        <CoupleProfile />

        {/* 3. Momen Kebersamaan Kami (HANYA satu carousel foto besar, tanpa grid thumbnail) - Latar Krem Gelap #EFE4D8 */}
        <PhotoGallery />

        {/* 4. The Details (Akad Nikah 16.00 WIB, Resepsi, alamat lengkap, View on Map, dress code) - Latar Krem #F7F1EA */}
        <EventSection />

        {/* 5. Ucapan & Doa (form nama + pesan, tombol kirim, daftar ucapan lengkap dengan tanggal) - Latar Marun #6B1A2C */}
        <WishesSection showToast={showToast} />

        {/* 6. Footer - Latar Marun Gelap #521321 */}
        <Footer />
      </main>

      {/* Pemutar Musik Mengambang & Tombol Toggle Audio */}
      {isCoverOpened && (
        <MusicPlayer shouldPlay={shouldPlayMusic} />
      )}

      {/* Notifikasi Toast */}
      {toastMessage && (
        <div className="editorial-toast" role="alert">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
