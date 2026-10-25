import React, { useState } from 'react';
import { Copy, Check, Gift } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export function DigitalGift({ showToast }) {
  const { gifts, features } = weddingConfig;
  const [copiedBank, setCopiedBank] = useState(null);

  if (!features.showGift || !gifts || gifts.length === 0) {
    return null;
  }

  const handleCopy = (accountNumber, bank) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(accountNumber);
      setCopiedBank(bank);
      showToast?.(`Nomor rekening ${bank} berhasil disalin!`);
      setTimeout(() => setCopiedBank(null), 2500);
    } else {
      showToast?.('Gagal menyalin nomor rekening');
    }
  };

  return (
    <section id="gift" className="editorial-registry-section">
      <div className="registry-dark-card">
        {/* Calligraphy Script Heading */}
        <h2 className="registry-script-title">Gift Registry</h2>

        {/* Floral branch divider */}
        <div className="registry-divider" aria-hidden="true">
          <svg viewBox="0 0 100 12" width="70" height="10" fill="none" stroke="currentColor">
            <path d="M0 6 H40 M60 6 H100 M50 1 C46 6 46 6 50 11 C54 6 54 6 50 1 Z" strokeWidth="1" />
          </svg>
        </div>

        {/* Minimal Gift Icon */}
        <div className="registry-icon-wrap" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="32" height="32" fill="none" stroke="currentColor">
            <rect x="6" y="16" width="28" height="18" rx="2" strokeWidth="1.2" />
            <rect x="4" y="11" width="32" height="5" rx="1" strokeWidth="1.2" />
            <path d="M20 11 L20 34" strokeWidth="1.2" />
            <path d="M20 11 C17 6 12 7 14 11 Z" strokeWidth="1.2" />
            <path d="M20 11 C23 6 28 7 26 11 Z" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Quote */}
        <p className="registry-quote">
          YOUR PRESENCE IS THE GREATEST GIFT, BUT IF YOU WISH TO HONOR US, A CONTRIBUTION TO OUR FUTURE WOULD MEAN THE WORLD.
        </p>

        {/* Bank Account List */}
        <div className="registry-accounts-list">
          {gifts.map((item, idx) => (
            <div key={idx} className="registry-account-card">
              <div className="account-info">
                <span className="account-bank-tag">{item.bank}</span>
                <span className="account-number">{item.accountNumber}</span>
                <span className="account-holder">a.n. {item.holder}</span>
              </div>
              <button
                onClick={() => handleCopy(item.accountNumber, item.bank)}
                className="btn-copy-terracotta"
                aria-label={`Salin nomor rekening ${item.bank}`}
              >
                {copiedBank === item.bank ? (
                  <>
                    <Check size={14} />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Salin No. Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Delicate Flower Line Art at Bottom */}
        <div className="registry-flower-art" aria-hidden="true">
          <svg viewBox="0 0 60 40" width="46" height="32" fill="none" stroke="currentColor">
            <path d="M30 40 L30 18" strokeWidth="1" strokeLinecap="round" />
            <path d="M30 28 Q22 22 20 28" strokeWidth="0.8" />
            <path d="M30 24 Q38 18 40 24" strokeWidth="0.8" />
            <circle cx="30" cy="14" r="3" strokeWidth="1" />
            <circle cx="26" cy="11" r="2" strokeWidth="0.8" />
            <circle cx="34" cy="11" r="2" strokeWidth="0.8" />
            <circle cx="30" cy="8" r="2" strokeWidth="0.8" />
          </svg>
        </div>
      </div>
    </section>
  );
}
