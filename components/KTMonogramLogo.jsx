import React from 'react';

/**
 * Logo Inisial 2 Mempelai (K & T) Sesuai Referensi Gambar 2
 * Menggabungkan huruf K dan T dengan siluet serif elegan dan aksen bunga mekar.
 */
export function KTMonogramLogo({ className = '', size = 80, color = 'currentColor', leafColor = 'currentColor' }) {
  return (
    <svg
      className={`kt-monogram-svg ${className}`}
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Monogram Kemal & Tri"
    >
      {/* HURUF T (Dasar Tegak & Garis Atas) */}
      <g fill={color}>
        {/* Garis horizontal atas huruf T */}
        <path d="M72 38 C72 36 78 35 106 35 C132 35 138 36 138 38 C138 43 134 46 132 46 C129 46 128 44 126 41 L108 41 L108 120 C108 126 112 128 116 128 L116 131 L86 131 L86 128 C90 128 94 126 94 120 L94 41 L80 41 C77 44 76 46 73 46 C71 46 68 43 72 38 Z" />
      </g>

      {/* HURUF K (Intertwined dengan T) */}
      <g fill={color}>
        {/* Batang Utama K */}
        <path d="M48 26 C45 26 40 29 38 33 C36 38 38 40 41 40 C43 40 45 38 46 36 C47 34 50 33 53 33 L53 118 C53 124 49 126 44 126 L44 129 L74 129 L74 126 C69 126 65 124 65 118 L65 72 L88 43 C91 40 92 38 92 36 C92 34 89 33 86 33 L86 30 L112 30 L112 33 C108 33 103 36 98 42 L72 73 L104 117 C109 124 114 126 119 126 L119 129 L88 129 L88 126 C93 126 94 124 90 118 L65 82 L65 33 L57 33 C54 33 51 30 48 26 Z" />
      </g>

      {/* BUNGA & DAUN MEKAR DI SISI KIRI (Persis seperti Bunga di Gambar 2) */}
      <g fill={leafColor} stroke={color} strokeWidth="1">
        {/* Kelopak Tengah Kiri */}
        <path
          d="M52 70 C38 66 22 72 16 78 C24 84 38 82 52 74 Z"
          fill={leafColor}
        />
        {/* Kelopak Atas Kiri */}
        <path
          d="M52 68 C44 54 34 44 26 42 C24 52 34 64 50 70 Z"
          fill={leafColor}
        />
        {/* Kelopak Bawah Kiri */}
        <path
          d="M52 76 C36 84 26 96 24 104 C34 102 46 90 54 78 Z"
          fill={leafColor}
        />
        {/* Kelopak Kecil Pucuk */}
        <path
          d="M53 62 C48 50 42 42 38 40 C37 46 44 56 52 64 Z"
          fill={leafColor}
        />
        {/* Pusat Bunga & Tangkai */}
        <circle cx="53" cy="72" r="3.5" fill={color} stroke="none" />
        <path d="M53 72 L58 76" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
