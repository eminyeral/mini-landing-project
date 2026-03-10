import Button from './components/Button/Button'; // 1. Önce içeri alıyoruz

function App() {
  return (
    <div className="container"> 
      <h1>Hoş Geldiniz!</h1>
      <p>Lütfen giriş yapın veya kayıt olun.</p>
      
      <div className="button-group">
        <Button variant="primary">Kayıt Ol</Button>
        <Button variant="outline">Giriş Yap</Button>
      </div>
    </div>
  );
}

export default App;