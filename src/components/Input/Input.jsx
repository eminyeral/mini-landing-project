import './Input.scss';

/**
 * Input Bileşeni
 * @param {string} label - Girdi alanının üzerinde görünen açıklama metni.
 * @param {string} id - Label ve Input'u birbirine bağlayan benzersiz kimlik.
 * @param {string} type - Input tipi (text, password, email vb.).
 * @param {string} placeholder - Girdi alanı boşken görünen yardımcı metin.
 */

const Input = ({ label, id, placeholder, type = 'text', value, onChange }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={id} className="input-group__label">{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-group__field"
      />
    </div>
  );
};

export default Input;