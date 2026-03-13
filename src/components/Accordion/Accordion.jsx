import { useState } from 'react';
import './Accordion.scss';

/**
 * Accordion Bileşeni
 * @param {Array} items - Soru ve cevapları içeren dizi [{question, answer}]
 */
const Accordion = ({ items }) => {
  // Açık olan sorunun indeksini tutar. null ise hepsi kapalıdır.
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Eğer tıklanan zaten açıksa kapat (null yap), değilse o indeksi aç
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`accordion__item ${activeIndex === index ? 'accordion__item--active' : ''}`}
        >
          <button 
            className="accordion__header" 
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className="accordion__question">{item.question}</span>
            <span className="accordion__icon">{activeIndex === index ? '−' : '+'}</span>
          </button>
          
          <div className="accordion__content">
            <div className="accordion__text">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;