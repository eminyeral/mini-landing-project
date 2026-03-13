import './Card.scss';

/**
 * Pricing Card Bileşeni
 * @param {Object} data - Kart verilerini içeren nesne (title, price, features, buttonText, highlight)
 */
const Card = ({ data }) => {
    if (!data) return null;
  
    return (
    <div className={`pricing-card ${data.highlight ? 'pricing-card--highlight' : ''}`}>
      {data.highlight && <span className="pricing-card__badge">En Popüler</span>}
      
      <h3 className="pricing-card__title">{data.title}</h3>
      
      <div className="pricing-card__price-wrapper">
        <span className="pricing-card__currency">₺</span>
        <span className="pricing-card__price">{data.price}</span>
        <span className="pricing-card__period">/ay</span>
      </div>

      <ul className="pricing-card__features">
        {data.features.map((feature, index) => (
          <li key={index} className="pricing-card__feature-item">
            <span className="pricing-card__check">✓</span> {feature}
          </li>
        ))}
      </ul>

      <button className={`pricing-card__button ${data.highlight ? 'pricing-card__button--primary' : 'pricing-card__button--outline'}`}>
        {data.buttonText}
      </button>
    </div>
  );
};

export default Card;