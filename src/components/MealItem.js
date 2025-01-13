import React from 'react';

const MealItem = (props) => {
  const { meal } = props;

  // Convert the price from a string to a number
  const price = parseFloat(meal.price).toFixed(2);

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${meal.image}`)} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;