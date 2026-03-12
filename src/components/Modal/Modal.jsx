import { useEffect } from 'react';
import './Modal.scss';

/**
 * Modal Bileşeni
 * @param {boolean} isOpen - Modal'ın açık olup olmadığını kontrol eder.
 * @param {function} onClose - Modal'ı kapatan fonksiyon.
 * @param {string} title - Modal başlığı.
 * @param {ReactNode} children - Modal içindeki içerik.
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  // ESC tuşuna basıldığında kapatma özelliği
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Modal kapandığında event listener'ı temizle
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;