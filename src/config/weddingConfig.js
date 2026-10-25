/**
 * Konfigurasi Utama Undangan Pernikahan
 * Semua data nama, tanggal, lokasi, foto, dan fitur dapat diubah di sini
 * tanpa perlu mengubah file komponen satu per satu.
 */

export const weddingConfig = {
  // Informasi Mempelai
  couple: {
    groom: {
      nickname: 'Kemal Rifian',
      fullName: 'Kemal Rifian',
      father: 'Almarhum Bpk. Salim',
      mother: 'Ibu Kushartini',
      photo: './images/gallery-2.jpg',
    },
    bride: {
      nickname: 'Tri Yuli Yanti',
      fullName: 'Tri Yuli Yanti',
      father: 'Bpk. Dartim',
      mother: 'Ibu Waskiyah',
      photo: './images/gallery-4.jpg',
    },
    quote: {
      text: 'Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
      source: 'QS. Ar-Rum: 21'
    }
  },

  // Waktu Acara Utama (untuk Countdown & Tampilan Tanggal Utama)
  mainDate: 'Minggu, 29 November 2026',
  targetDate: '2026-11-29T08:00:00',
  timezone: 'Asia/Jakarta',

  // Detail Acara (Akad & Resepsi)
  events: [
    {
      id: 'akad',
      title: 'Akad Nikah',
      date: 'Sabtu, 28 November 2026',
      time: '16.00 WIB - Selesai',
      startIso: '2026-11-28T16:00:00',
      endIso: '2026-11-28T19:00:00',
      venue: 'Kediaman Mempelai Wanita',
      address: 'Dusun Sekardoja, RT/RW 02/10, Kelurahan Pamulihan, Kecamatan Larangan, Kabupaten Brebes, Jawa Tengah',
      badge: 'Khusus Keluarga'
    },
    {
      id: 'resepsi',
      title: 'Resepsi Pernikahan',
      date: 'Minggu, 29 November 2026',
      time: '08:00 WIB - Selesai',
      startIso: '2026-11-29T08:00:00',
      endIso: '2026-11-29T16:00:00',
      venue: 'Kediaman Mempelai Wanita',
      address: 'Dusun Sekardoja, RT/RW 02/10, Kelurahan Pamulihan, Kecamatan Larangan, Kabupaten Brebes, Jawa Tengah',
      badge: 'Sesi Terbuka'
    }
  ],

  // Lokasi & Peta
  location: {
    venue: 'Kediaman Mempelai Wanita',
    address: 'Dusun Sekardoja, RT/RW 02/10, Kelurahan Pamulihan, Kecamatan Larangan, Kabupaten Brebes, Jawa Tengah',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dusun+Sekardoja+Pamulihan+Larangan+Brebes',
    embedUrl: 'https://maps.google.com/maps?q=Dusun%20Sekardoja,%20Pamulihan,%20Larangan,%20Brebes&t=&z=14&ie=UTF8&iwloc=&output=embed'
  },

  // Perjalanan Cinta (Love Story)
  loveStory: [
    {
      year: '2021',
      title: 'Pertemuan Pertama',
      description: 'Takdir mempertemukan kami di sebuah acara seminar kampus. Percakapan santai kala itu menjadi awal dari persahabatan yang hangat.'
    },
    {
      year: '2023',
      title: 'Menjalin Komitmen',
      description: 'Setelah saling mengenal lebih dekat dan berbagi mimpi bersama, kami memutuskan untuk melangkah bersama dalam hubungan yang lebih serius.'
    },
    {
      year: '2025',
      title: 'Hari Pertunangan',
      description: 'Dengan restu kedua orang tua dan keluarga besar, kami mengikat janji untuk melangkah menuju gerbang pernikahan suci.'
    },
    {
      year: '2026',
      title: 'Menuju Babak Baru',
      description: 'Kini saatnya kami menyempurnakan ibadah dan memulai babak kehidupan baru sebagai sepasang suami dan istri.'
    }
  ],

  // Galeri Foto
  gallery: [
    {
      src: './images/gallery-1.jpg',
      caption: 'Kemal Rifian & Tri Yuli Yanti'
    },
    {
      src: './images/gallery-2.jpg',
      caption: 'Momen kebersamaan yang penuh kehangatan'
    },
    {
      src: './images/gallery-3.jpg',
      caption: 'Tawa dan keceriaan di setiap langkah'
    },
    {
      src: './images/gallery-4.jpg',
      caption: 'Menatap masa depan dengan penuh keyakinan'
    },
    {
      src: './images/gallery-5.jpg',
      caption: 'Langkah suci menuju hari bahagia'
    },
    {
      src: './images/gallery-6.jpg',
      caption: 'Momen kebersamaan Kemal & Tri'
    }
  ],

  // Pengaturan Musik Latar
  music: {
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-piano-112678.mp3',
    title: 'A Thousand Years - Piano Acoustic'
  },

  // Rekening Hadiah Digital (Amplop Digital)
  gifts: [
    {
      bank: 'Bank BCA',
      accountNumber: '1234567890',
      holder: 'Kemal Rifian',
      qrImage: null
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '9876543210123',
      holder: 'Tri Yuli Yanti',
      qrImage: null
    }
  ],

  // Pengaturan Fitur & Batasan
  features: {
    showStory: true,
    showGallery: true,
    showGift: false, // Dihilangkan sesuai permintaan pengguna
    showWishes: true
  }
};
