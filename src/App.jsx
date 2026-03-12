import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import './App.scss';

const pricingData = [
  { id: 1, title: "Başlangıç", price: "0", features: ["Temel Özellikler", "Mobil Uyumlu", "Ücretsiz Destek"], buttonText: "Ücretsiz Başla", highlight: false },
  { id: 2, title: "Pro", price: "299", features: ["Karanlık Mod", "Sınırsız Proje", "Öncelikli Destek"], buttonText: "Hemen Al", highlight: true },
  { id: 3, title: "Business", price: "899", features: ["Özel Tasarım", "API Erişimi", "7/24 Teknik Destek"], buttonText: "İletişime Geç", highlight: false }
];

function App() {
  const [theme, setTheme] = useState('light');
  // Modal'ın açık/kapalı durumunu kontrol eden state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tema değişikliğini HTML kök elemanına yansıtır
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container">
      {/* Giriş Yap ve Tema Değiştirme butonları */}
      <div className="top-actions">
        <Button onClick={() => setIsModalOpen(true)} variant="outline">
          Giriş Yap
        </Button>
        <Button onClick={toggleTheme} variant="outline" aria-label="Temayı Değiştir">
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
      </div>

      {/* Hero: Karşılama Alanı */}
      <header className="hero">
        <h1>Geleceğin Arayüzü Burada</h1>
        <p>Hızlı, modern ve tamamen duyarlı bileşen kütüphanesi.</p>
      </header>

      {/* Fiyatlandırma: Veri dizisi map edilerek Card bileşenlerine aktarılır */}
      <section className="pricing-section">
        <h2>Fiyatlandırma Planları</h2>
        <div className="pricing-container">
          {pricingData.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </section>

      {/* İletişim: Basit bir yalancı submit formu */}
      <section className="contact-section">
        <h2>İletişim</h2>
        <Input label="E-posta" id="email" placeholder="mail@adres.com" />
        <Button variant="primary">Gönder</Button>
      </section>

      {/* Modal: Giriş Yap bölümü*/}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Giriş Yap"
      >
        <div className="modal-login-form">
          <p>Devam etmek için bilgilerinizi girin.</p>
          <Input label="Kullanıcı Adı" id="username" placeholder="kullanici_adi" />
          <Input label="Şifre" id="password" type="password" placeholder="••••••" />
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>Giriş Yap</Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;