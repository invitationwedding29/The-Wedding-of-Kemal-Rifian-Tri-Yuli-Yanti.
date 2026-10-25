import React, { useState, useEffect } from 'react';
import { Send, Loader2, Heart } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { wishesService } from '../services/dataService';
import { CornerOrnaments, SideOrnaments, TwinRingsDivider } from './Decorations';

/**
 * UCAPAN & DOA RESTU (LATAR MARUN #6B1A2C):
 * - Form nama + pesan
 * - Tombol kirim ucapan
 * - Daftar ucapan lengkap dengan penomoran, nama, dan tanggal
 * - Tanpa opsi hadir/tidak hadir (murni doa restu)
 * - Ornamen sudut emas (opacity 0.85)
 * - Ornamen sisi kiri & kanan (≥1000px)
 * - Pembatas cincin kembar
 */
export function WishesSection({ showToast }) {
  const { features } = weddingConfig;
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    wishesService.getWishes().then(setWishes);
  }, []);

  if (!features.showWishes) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      setLoading(true);
      const res = await wishesService.addWish({ name, message });
      setWishes((prev) => [res.data, ...prev]);
      setName('');
      setMessage('');
      showToast?.('Terima kasih, untaian doa restu Anda telah terkirim!');
    } catch (err) {
      alert(err.message || 'Gagal mengirim ucapan');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (ts) => {
    try {
      const d = new Date(ts);
      return d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return '';
    }
  };

  return (
    <section id="wishes" className="wedding-section wishes-maroon-section">
      {/* Ornamen Sudut Garis Emas di Latar Marun */}
      <CornerOrnaments theme="gold-on-maroon" />

      {/* Ornamen Sisi Kiri & Kanan (≥1000px) */}
      <SideOrnaments theme="gold-on-maroon" />

      <div className="section-content-container">
        {/* 1. Label Uppercase Letter-Spacing .3em */}
        <p className="reveal-item section-label-gold">
          UNTUK KEMAL &amp; TRI YULI
        </p>

        {/* 2. Judul Script Pinyon */}
        <h2 className="reveal-item section-script-title-gold">
          Wishes &amp; Prayers
        </h2>

        {/* 3. Pembatas Cincin Kembar Emas */}
        <div className="reveal-item section-rings-wrap">
          <TwinRingsDivider color="#C9A27A" />
        </div>

        {/* 4. Form Doa & Ucapan */}
        <div className="reveal-item wishes-form-card">
          <form onSubmit={handleSubmit} className="pure-wishes-form">
            <div className="form-field-group">
              <label htmlFor="guest-input-name" className="field-label-gold">
                NAMA LENGKAP
              </label>
              <input
                id="guest-input-name"
                type="text"
                className="input-field-gold"
                placeholder="Tuliskan nama Anda..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="guest-input-msg" className="field-label-gold">
                UNTAIAN DOA RESTU
              </label>
              <textarea
                id="guest-input-msg"
                rows={3}
                className="textarea-field-gold"
                placeholder="Tuliskan ucapan dan doa terbaik Anda untuk kedua mempelai..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className="btn-submit-gold" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={16} className="spinning" />
                  <span>MENGIRIM DOA...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>KIRIM UCAPAN &amp; DOA RESTU</span>
                </>
              )}
            </button>
          </form>

          {/* 5. Header Daftar Ucapan */}
          <div className="wishes-feed-header">
            <Heart size={16} className="wishes-feed-heart" />
            <h3 className="wishes-feed-title">
              Untaian Doa &amp; Ucapan ({wishes.length})
            </h3>
          </div>

          {/* Daftar Ucapan dengan Penomoran & Tanggal */}
          <div className="wishes-scroll-feed">
            {wishes.map((w, index) => (
              <div key={w.id || index} className="wish-feed-card">
                <div className="wish-feed-top">
                  <span className="wish-author-name">
                    {index + 1}. {w.name}
                  </span>
                  <span className="wish-author-date">
                    {formatTime(w.timestamp)}
                  </span>
                </div>
                <p className="wish-author-msg">"{w.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
