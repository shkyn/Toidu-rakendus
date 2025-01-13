import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext'; // Impordime CartContext

const Header = () => {
  const { items } = useContext(CartContext); // Kasutame konteksti

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
          Cart ({items.length}) {/* Kuvame ostukorvis olevate toodete arvu */}
        </Button>
      </nav>
    </header>
  );
};

export default Header;