import React from 'react';
import { Home, Heart, Calendar, MapPin, Image, CheckSquare, MessageCircle } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export function Navbar() {
  const { features } = weddingConfig;

  const navItems = [
    { label: 'Home', href: '#hero', icon: Home, show: true },
    { label: 'Mempelai', href: '#couple', icon: Heart, show: true },
    { label: 'Acara', href: '#events', icon: Calendar, show: true },
    { label: 'Lokasi', href: '#location', icon: MapPin, show: true },
    { label: 'Galeri', href: '#gallery', icon: Image, show: features.showGallery },
    { label: 'RSVP', href: '#rsvp', icon: CheckSquare, show: features.showRSVP },
    { label: 'Ucapan', href: '#wishes', icon: MessageCircle, show: features.showWishes }
  ];

  return (
    <nav className="bottom-nav" aria-label="Navigasi Halaman Undangan">
      {navItems.filter((item) => item.show).map((item, index) => {
        const Icon = item.icon;
        return (
          <a key={index} href={item.href} className="nav-item">
            <Icon size={18} />
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
