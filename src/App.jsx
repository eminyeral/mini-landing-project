import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import './App.scss';

const pricingData = [
  { id: 1, title: "Başlangıç", price: "0", features: ["Temel Özellikler", "Mobil Uyumlu", "Ücretsiz Destek"], buttonText: "Ücretsiz Başla", highlight: false },
  { id: 2, title: "Pro", price: "299", features: ["Karanlık Mod", "Sınırsız Proje", "Öncelikli Destek"], buttonText: "Hemen Al", highlight: true },
  { id: 3, title: "Business", price: "899", features: ["Özel Tasarım", "API Erişimi", "7/24 Teknik Destek"], buttonText: "İletişime Geç", highlight: false }
];

function App() {
  // Tema durumunu takip eden state
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Tema değiştirme butonuna basıldığında tetiklenecek fonksiyon
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container">
      <div className="theme-toggle">
        <Button onClick={toggleTheme} variant="outline" aria-label="Temayı Değiştir">
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
      </div>

      <header className="hero">
        <h1>Geleceğin Arayüzü Burada</h1>
        <p>Hızlı, modern ve tamamen duyarlı bileşen kütüphanesi.</p>
      </header>

      {/* Fiyat Kartları Bölümü */}
      <section className="pricing-section">
        <h2>Fiyatlandırma Planları</h2>
        <div className="pricing-container">
          {pricingData.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </section>

      {/* İletişim Formu */}
      <section className="contact-section">
        <h2>İletişim</h2>
        <Input label="E-posta" id="email" placeholder="mail@adres.com" />
        <Button variant="primary">Gönder</Button>
      </section>
    </div>
  );
}

export default App;