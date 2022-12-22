import React from 'react';

const DrinkCard = ({ drink }) => {
  const { idDrink, strAlcoholic, strCategory, strDrinkThumb } = drink;

  return (
    <div className="card">
      <img src={strDrinkThumb} alt={strAlcoholic} className="card-image" />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strAlcoholic}</h3>
        <a
          href={'https://www.themealdb.com/meal/' + idDrink}
          style={{ textDecoration: 'none', color: 'black' }}
          target="_blank"
        >
          Ingredients
        </a>
      </div>
    </div>
  );
};

export default DrinkCard;
