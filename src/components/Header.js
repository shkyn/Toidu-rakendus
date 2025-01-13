import React, { useState, useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartModal from './UI/CartModal';
import { CartContext } from '../store/CartContext';

const Header = () => {
  const { items, totalQuantity, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true); // Avame modaali
    console.log('Cart opened. Items in cart:', items); // Logime konsooli
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Sulgeme modaali
    console.log('Cart closed.'); // Logime konsooli
  };

  const handleCheckout = () => {
    alert('Checkout successful! Your order has been placed.');
    clearCart(); // Tühjendame ostukorvi
    setIsModalOpen(false); // Sulgeme modaali
    console.log('Checkout completed. Cart cleared.'); // Logime konsooli
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleCartClick}>
          Cart ({totalQuantity})
        </Button>
      </nav>

      {isModalOpen && (
        <CartModal onClose={handleCloseModal} onCheckout={handleCheckout}>
          <h2>Your Cart</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
              </li>
            ))}
          </ul>
        </CartModal>
      )}
    </header>
  );
};

export default Header;