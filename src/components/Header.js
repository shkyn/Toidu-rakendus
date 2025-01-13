import React, { useContext, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext'; // Impordime CartContext

const Header = () => {
  const { items, totalQuantity } = useContext(CartContext); // Kasutame konteksti

  // Logime ostukorvi tooted konsooli iga kord, kui items muutub
  useEffect(() => {
    console.log('Cart Items:', items);
  }, [items]);

  const handleCartClick = () => {
    console.log('Cart button clicked!');
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleCartClick}>
          Cart ({totalQuantity}) {/* Kuvame ostukorvi kogusumma */}
        </Button>
      </nav>
    </header>
  );
};

export default Header;