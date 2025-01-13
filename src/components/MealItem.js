import React from 'react';

const MealItem = (props) => {
  const { meal } = props;


  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(meal.price);

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${meal.image}`)} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
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