import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import './App.scss';

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
        <Button onClick={toggleTheme} variant="outline">
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
      </div>

      <h1>Hoş Geldiniz!</h1>
      
      {/* Input alanları */}
      <Input label="E-posta" id="email" placeholder="mail@adres.com" />
      <Input label="Şifre" id="pass" type="password" placeholder="****" />

      {/* Butonlar */}
      <div className="button-group">
        <Button variant="primary">Kayıt Ol</Button>
        <Button variant="outline">Giriş Yap</Button>
      </div>
    </div>
  );
}

export default App;