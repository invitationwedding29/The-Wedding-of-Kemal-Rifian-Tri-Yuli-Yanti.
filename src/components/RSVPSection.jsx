import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { rsvpService } from '../services/dataService';

export function RSVPSection({ showToast }) {
  const { features } = weddingConfig;
  const [formData, setFormData] = useState({
    name: '',
    status: 'Hadir',
    guestsCount: 1,
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // Cek jika sudah pernah submit sebelumnya di browser ini
    const existing = rsvpService.getSavedRSVP();
    if (existing) {
      setSubmitted(true);
      setFormData(existing);
    }
  }, []);

  if (!features.showRSVP) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Silakan masukkan nama Anda.');
      return;
    }

    try {
      setLoading(true);
      await rsvpService.submitRSVP(formData);
      setSubmitted(true);
      showToast('Konfirmasi RSVP berhasil disimpan!');
    } catch (err) {
      setErrorMsg(err.message || 'Gagal mengirim RSVP. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">KONFIRMASI KEHADIRAN</span>
          <h2 className="section-title">RSVP Pernikahan</h2>
          <p className="section-desc">
            Mohon konfirmasikan kehadiran Anda untuk membantu kami mempersiapkan jamuan terbaik.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '540px', margin: '0 auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <CheckCircle2 size={48} style={{ color: 'var(--color-sage)', margin: '0 auto 1rem' }} />
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Terima Kasih, {formData.name}!
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                Konfirmasi kehadiran Anda ({formData.status}) dengan {formData.guestsCount} orang telah tercatat.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
              >
                Ubah Konfirmasi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="rsvp-name">
                  Nama Lengkap *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  className="form-input"
                  placeholder="Contoh: Budi Santoso"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={loading}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Konfirmasi Kehadiran *</label>
                <div className="rsvp-chips">
                  {[
                    { val: 'Hadir', label: 'Ya, Hadir' },
                    { val: 'Tidak Hadir', label: 'Tidak Hadir' },
                    { val: 'Masih Ragu', label: 'Masih Ragu' }
                  ].map((chip) => (
                    <button
                      key={chip.val}
                      type="button"
                      className={`rsvp-chip ${formData.status === chip.val ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, status: chip.val })}
                      disabled={loading}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {formData.status === 'Hadir' && (
                <div className="form-group">
                  <label className="form-label" htmlFor="rsvp-guests">
                    Jumlah Tamu Hadir
                  </label>
                  <select
                    id="rsvp-guests"
                    className="form-select"
                    value={formData.guestsCount}
                    onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                    disabled={loading}
                  >
                    {Array.from({ length: features.maxGuestsPerRsvp }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} Orang
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="rsvp-message">
                  Pesan atau Catatan (Opsional)
                </label>
                <textarea
                  id="rsvp-message"
                  className="form-textarea"
                  rows={3}
                  placeholder="Tuliskan ucapan atau catatan singkat..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={loading}
                />
              </div>

              {errorMsg && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#b91c1c', fontSize: '0.8rem', marginBottom: '1rem' }}>
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="spinning" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Kirim Konfirmasi</span>
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--color-text-muted)', marginTop: '0.85rem' }}>
                Mode demo aktif: data disimpan di perangkat lokal browser ini.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
