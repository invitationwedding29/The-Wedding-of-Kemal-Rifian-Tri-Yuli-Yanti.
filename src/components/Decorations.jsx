import React from 'react';

/**
 * Ornamen Sudut Garis Daun & Bunga (SVG Inline, stroke-width 1.2px)
 * Diposisikan di 4 sudut tiap section (dicerminkan).
 * Ukuran: clamp(90px, 22vw, 300px) untuk section, clamp(110px, 26vw, 340px) untuk cover.
 * Pada section marun: stroke emas opacity 0.85
 * Pada section krem: stroke marun opacity 0.30
 */
export function CornerOrnaments({ theme = 'maroon-on-cream', isCover = false }) {
  const isMaroonBg = theme === 'gold-on-maroon' || theme === 'cover-gold';
  const strokeColor = isMaroonBg ? '#C9A27A' : '#6B1A2C';
  const strokeOpacity = isMaroonBg ? 0.85 : 0.30;
  const ornamentClass = isCover ? 'corner-ornament-cover' : 'corner-ornament-section';

  const cornerSvg = (
    <svg
      className="corner-ornament-svg"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Batang Utama Melengkung dari Sudut */}
      <path
        d="M6 6 C 35 6, 75 22, 106 54 C 124 76, 132 110, 134 134"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
        strokeLinecap="round"
      />
      {/* Garis Aksen Kedua Berdampingan */}
      <path
        d="M6 16 C 28 16, 60 28, 86 56 C 104 76, 112 106, 114 134"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity * 0.7}
        strokeLinecap="round"
      />
      {/* Daun 1 */}
      <path
        d="M36 10 C 44 4, 56 4, 62 8 C 56 18, 46 18, 36 10 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      {/* Daun 2 */}
      <path
        d="M68 22 C 78 14, 90 18, 94 26 C 84 32, 74 30, 68 22 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      {/* Daun 3 */}
      <path
        d="M96 46 C 108 40, 120 46, 122 56 C 112 60, 102 56, 96 46 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      {/* Kuntum Bunga Mekar Halus */}
      <path
        d="M106 54 C 114 48, 124 52, 126 58 C 120 66, 110 64, 106 54 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      <circle cx="108" cy="56" r="2.2" fill={strokeColor} fillOpacity={strokeOpacity} />
      {/* Daun 4 Bawah */}
      <path
        d="M114 80 C 126 82, 132 92, 128 102 C 120 98, 116 88, 114 80 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      {/* Daun 5 Paling Bawah */}
      <path
        d="M124 108 C 134 112, 136 122, 130 130 C 126 122, 124 116, 124 108 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      {/* Titik Estetik */}
      <circle cx="18" cy="18" r="2.5" stroke={strokeColor} strokeWidth="1.2" strokeOpacity={strokeOpacity} />
      <circle cx="32" cy="32" r="1.8" fill={strokeColor} fillOpacity={strokeOpacity} />
    </svg>
  );

  return (
    <div className="section-corner-decorations" aria-hidden="true">
      <div className={`corner-ornament corner-top-left ${ornamentClass}`}>{cornerSvg}</div>
      <div className={`corner-ornament corner-top-right ${ornamentClass}`}>{cornerSvg}</div>
      <div className={`corner-ornament corner-bottom-left ${ornamentClass}`}>{cornerSvg}</div>
      <div className={`corner-ornament corner-bottom-right ${ornamentClass}`}>{cornerSvg}</div>
    </div>
  );
}

/**
 * Ornamen Sisi Kiri & Kanan (Muncul di layar ≥1000px untuk mengisi ruang kosong samping)
 */
export function SideOrnaments({ theme = 'maroon-on-cream' }) {
  const isMaroonBg = theme === 'gold-on-maroon';
  const strokeColor = isMaroonBg ? '#C9A27A' : '#6B1A2C';
  const strokeOpacity = isMaroonBg ? 0.75 : 0.28;

  const sideSvg = (
    <svg
      className="side-ornament-svg"
      viewBox="0 0 60 140"
      width="50"
      height="120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10 Q28 70 4 130"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
        strokeLinecap="round"
      />
      <path
        d="M12 40 C24 32 34 38 32 48 C20 50 14 44 12 40 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      <path
        d="M16 70 C30 64 42 70 38 80 C26 80 18 74 16 70 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      <path
        d="M12 100 C24 94 34 100 32 110 C20 110 14 104 12 100 Z"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      <circle cx="28" cy="72" r="1.8" fill={strokeColor} fillOpacity={strokeOpacity} />
    </svg>
  );

  return (
    <div className="section-side-decorations" aria-hidden="true">
      <div className="side-ornament side-left">{sideSvg}</div>
      <div className="side-ornament side-right">{sideSvg}</div>
    </div>
  );
}

/**
 * Lingkaran Emas Tipis Konsentris di Belakang Amplop (Diameter min(130vw, 920px))
 * - Border 1px emas opacity .5
 * - Ring luar / dalam opacity .06
 */
export function ConcentricGoldRings() {
  return (
    <div className="concentric-rings-wrap" aria-hidden="true">
      <svg
        className="concentric-rings-svg"
        viewBox="0 0 920 920"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ring Paling Luar (Opacity .06) */}
        <circle cx="460" cy="460" r="445" stroke="#C9A27A" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="460" cy="460" r="410" stroke="#C9A27A" strokeWidth="1" strokeDasharray="3 6" strokeOpacity="0.06" />

        {/* Ring Luar Menengah (Opacity .12) */}
        <circle cx="460" cy="460" r="370" stroke="#C9A27A" strokeWidth="1" strokeOpacity="0.12" />

        {/* Ring Utama (Border 1px emas Opacity .5) */}
        <circle cx="460" cy="460" r="320" stroke="#C9A27A" strokeWidth="1.2" strokeOpacity="0.5" />
        <circle cx="460" cy="460" r="305" stroke="#C9A27A" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.35" />

        {/* Ring Dalam (Opacity .06) */}
        <circle cx="460" cy="460" r="260" stroke="#C9A27A" strokeWidth="1" strokeOpacity="0.06" />
        <circle cx="460" cy="460" r="210" stroke="#C9A27A" strokeWidth="1" strokeOpacity="0.06" />
      </svg>
    </div>
  );
}

/**
 * Pembatas Cincin Kembar (SVG Inline)
 * Ditampilkan di bawah setiap judul script Pinyon
 */
export function TwinRingsDivider({ color = '#C9A27A' }) {
  return (
    <div className="twin-rings-divider-wrap" aria-hidden="true">
      <svg
        className="twin-rings-svg"
        viewBox="0 0 180 24"
        width="140"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Garis Aksen Kiri */}
        <line x1="10" y1="12" x2="68" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="68" cy="12" r="1.5" fill={color} />
        <circle cx="20" cy="12" r="1.2" fill={color} />

        {/* Cincin 1 (Kiri) */}
        <circle cx="84" cy="12" r="7.5" stroke={color} strokeWidth="1.4" />
        {/* Permata Cincin 1 */}
        <polygon points="84,4 85.5,5.8 84,7.6 82.5,5.8" fill={color} />

        {/* Cincin 2 (Kanan, Saling Mengunci) */}
        <circle cx="96" cy="12" r="7.5" stroke={color} strokeWidth="1.4" />

        {/* Garis Aksen Kanan */}
        <circle cx="112" cy="12" r="1.5" fill={color} />
        <circle cx="160" cy="12" r="1.2" fill={color} />
        <line x1="112" y1="12" x2="170" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * 12 Kelopak Emas Jatuh Pelan di Hero & Cover (Animasi CSS 9-17 detik)
 */
export function FallingPetals() {
  const petals = [
    { left: '6%', delay: '0s', duration: '11s', scale: 0.8 },
    { left: '14%', delay: '2.5s', duration: '14s', scale: 1.1 },
    { left: '23%', delay: '5s', duration: '10s', scale: 0.9 },
    { left: '32%', delay: '1.2s', duration: '16s', scale: 1.2 },
    { left: '41%', delay: '4s', duration: '12s', scale: 0.75 },
    { left: '50%', delay: '7s', duration: '15s', scale: 1.0 },
    { left: '59%', delay: '3.2s', duration: '13s', scale: 0.85 },
    { left: '68%', delay: '0.8s', duration: '17s', scale: 1.15 },
    { left: '77%', delay: '6s', duration: '11.5s', scale: 0.95 },
    { left: '85%', delay: '2s', duration: '14.5s', scale: 1.05 },
    { left: '92%', delay: '4.8s', duration: '12.5s', scale: 0.7 },
    { left: '97%', delay: '1.8s', duration: '16.5s', scale: 1.0 }
  ];

  return (
    <div className="falling-petals-container" aria-hidden="true">
      {petals.map((p, idx) => (
        <span
          key={idx}
          className="falling-petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: `scale(${p.scale})`
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path
              d="M12 2 C16 6, 21 11, 18 17 C15 22, 9 22, 6 17 C3 11, 8 6, 12 2 Z"
              fill="#C9A27A"
              fillOpacity="0.45"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
