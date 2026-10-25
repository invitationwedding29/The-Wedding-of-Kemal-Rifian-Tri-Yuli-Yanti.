import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'GETTING THERE (LOKASI & AKSES)',
    a: 'Acara diselenggarakan di Dusun Sekardoja, RT/RW 02/10, Kel. Pamulihan, Kec. Larangan, Brebes. Tersedia area parkir kendaraan roda 2 dan roda 4 di sekitar lokasi dengan bantuan panitia.'
  },
  {
    q: 'ACCOMMODATION (PENGINAPAN TERDEKAT)',
    a: 'Bagi keluarga dan kerabat dari luar kota yang membutuhkan akomodasi, tersedia beberapa hotel & guest house di pusat Kabupaten Brebes atau Kota Tegal (sekitar 35-45 menit dari lokasi).'
  },
  {
    q: 'PROTOKOL ACARA & KELUARGA',
    a: 'Kami menyambut dengan hangat seluruh keluarga dan kerabat tercinta. Dimohon untuk hadir tepat waktu sesuai jadwal sesi demi kenyamanan bersama.'
  },
  {
    q: 'KONTAK KELUARGA / INFORMASI LAIN',
    a: 'Apabila membutuhkan bantuan arah rute jalan atau pertanyaan lainnya, silakan menghubungi pihak panitia keluarga di lokasi atau melalui nomor kontak yang tertera pada undangan fisik.'
  }
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="editorial-faq-section">
      <div className="faq-dark-card">
        {/* Calligraphy Script Heading */}
        <h2 className="faq-script-title">FAQ</h2>

        <div className="faq-accordion-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  onClick={() => toggle(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
