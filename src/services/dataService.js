/**
 * Service untuk mengelola RSVP dan Ucapan Tamu.
 * Menggunakan abstraksi Promise agar dapat langsung disambungkan ke
 * Supabase, Firebase, atau REST API backend di masa mendatang.
 *
 * Pada tahap lokal/demo ini, data disimpan di browser LocalStorage.
 */

const STORAGE_KEYS = {
  WISHES: 'wedding_wishes_v4'
};

const INITIAL_WISHES = [
  {
    id: '1',
    name: 'Muhammad Arfan',
    message: 'Selamat berbahagia Kemal dan Tri! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Lancar sampai hari H yaa!',
    timestamp: '2026-10-22T14:30:00.000Z'
  },
  {
    id: '2',
    name: 'Putra Adi Baruna',
    message: 'Happy wedding sahabatku! Turut bersyukur dan bahagia atas pernikahan kalian berdua, doa terbaik selalu menyertai.',
    timestamp: '2026-10-21T10:15:00.000Z'
  },
  {
    id: '3',
    name: 'Nur Alfi Hamzah',
    message: 'Selamat menempuh hidup baru sahabatku Kemal & Tri, semoga senantiasa diberkahi kebahagiaan!',
    timestamp: '2026-10-20T08:45:00.000Z'
  }
];

export const wishesService = {
  // Ambil daftar ucapan
  async getWishes() {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const local = localStorage.getItem(STORAGE_KEYS.WISHES);
    if (local) {
      try {
        return JSON.parse(local);
      } catch {
        return INITIAL_WISHES;
      }
    }
    return INITIAL_WISHES;
  },

  // Tambahkan ucapan baru
  async addWish({ name, message }) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (!name || !message) {
      throw new Error('Nama dan pesan doa restu wajib diisi.');
    }

    const currentWishes = await this.getWishes();
    const newWish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    const updated = [newWish, ...currentWishes];
    localStorage.setItem(STORAGE_KEYS.WISHES, JSON.stringify(updated));
    return { success: true, data: newWish, isLocalDemo: true };
  }
};
