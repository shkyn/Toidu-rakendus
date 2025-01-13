import React from 'react';
import './Button.css'; // Impordime CSS faili

const Button = ({ textOnly, onClick, children }) => {
  // Määrame klassi vastavalt textOnly väärtusele
  const buttonClass = textOnly ? 'text-button' : 'button';

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;