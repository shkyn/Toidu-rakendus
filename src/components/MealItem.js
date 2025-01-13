import React, { useContext } from 'react';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

const MealItem = (props) => {
  const { meal } = props;
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(meal); // Lisame toidu ostukorvi
    console.log('Added to cart:', meal); // Logime konsooli
  };

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${meal.image}`)} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;