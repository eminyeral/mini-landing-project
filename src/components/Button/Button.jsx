import './Button.scss';

/**
 * Button Bileşeni
 * @param {string} variant - 'primary' veya 'outline' (Görünüm tipi)
 * @param {function} onClick - Tıklama olayı
 * @param {children} children - Butonun içindeki yazı
 */

const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  return (
    <button 
      className={`btn btn--${variant}`} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;