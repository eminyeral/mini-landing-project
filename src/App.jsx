import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import Accordion from './components/Accordion/Accordion';
import './App.scss';

const pricingData = [
  { id: 1, title: "Başlangıç", price: "0", features: ["Temel Özellikler", "Mobil Uyumlu", "Ücretsiz Destek"], buttonText: "Ücretsiz Başla", highlight: false },
  { id: 2, title: "Pro", price: "299", features: ["Karanlık Mod", "Sınırsız Proje", "Öncelikli Destek"], buttonText: "Hemen Al", highlight: true },
  { id: 3, title: "Business", price: "899", features: ["Özel Tasarım", "API Erişimi", "7/24 Teknik Destek"], buttonText: "İletişime Geç", highlight: false }
];

// SSS Verisi: Statik olarak dışarıda tanımlandı
const faqData = [
  { id: 1, question: "Kredi kartı gerekli mi?", answer: "Hayır, ücretsiz planımız için herhangi bir kart bilgisi gerekmemektedir." },
  { id: 2, question: "İstediğim zaman iptal edebilir miyim?", answer: "Evet, üyeliğinizi dilediğiniz an panel üzerinden iptal edebilirsiniz." },
  { id: 3, question: "Teknik destek sunuyor musunuz?", answer: "Pro ve Business planlarımızda 7/24 canlı destek hizmetimiz mevcuttur." }
];

function App() {
  const [theme, setTheme] = useState('light');
  // Modal'ın açık/kapalı durumunu kontrol eden state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form doğrulama ve yalancı submit için eklenen state'ler [cite: 4, 8]
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Tema değişikliğini HTML kök elemanına yansıtır
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // İletişim formu doğrulama mantığı 
  const handleContactSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setIsSent(false);

    // Boş alan kontrolü 
    if (!email.trim()) {
      setEmailError('E-posta alanı boş bırakılamaz.');
      return;
    }

    // Basit e-posta format kontrolü 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Lütfen geçerli bir e-posta formatı girin.');
      return;
    }

    // Yalancı submit işlemi 
    console.log("Form verisi gönderildi:", email);
    setIsSent(true);
    setEmail('');
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

      {/* SSS Bölümü: Accordion bileşeni kullanıldı */}
      <section className="faq-section">
        <h2 className="section-title">Sıkça Sorulan Sorular</h2>
        <Accordion items={faqData} />
      </section>

      {/* İletişim: Basit bir yalancı submit formu [cite: 4, 8] */}
      <section className="contact-section">
        <h2>İletişim</h2>
        <form onSubmit={handleContactSubmit} noValidate>
          <Input 
            label="E-posta" 
            id="email" 
            placeholder="mail@adres.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.5rem' }}>{emailError}</p>}
          {isSent && <p style={{ color: 'green', fontSize: '0.8rem', marginTop: '0.5rem' }}>Mesajınız başarıyla iletildi!</p>}
          <Button variant="primary" type="submit">Gönder</Button>
        </form>
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