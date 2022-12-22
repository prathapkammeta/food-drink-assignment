import React from 'react';

import React, { useState, useEffect } from 'react';
import SearchRecipe from './components/SearchRecipe';
import RecipeCard from './components/RecipeCard';
import DrinkCard from './components/DrinkCard';
import './style.css';

import './App.css';
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const foodUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const drinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  // const [recipes, setRecipes] = useState([]);

  const [foodCategory, setFoodCategory] = useState([]);
  const [drinksCategory, setDrinkCategory] = useState([]);
  //  function to search for the meals

  // const searchRecipes = async () => {
  //   setIsLoading(true);
  //   const url = apiUrl + query;
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  //   setRecipes(data.meals);
  //   setIsLoading(false);
  //   setQuery('');
  // };

  const getAllIngredients = async () => {
    setIsLoading(true);
    const getFoodUrl = foodUrl + query;
    const getDrinksUrl = drinksUrl + query;
    const urlsArr = [getFoodUrl, getDrinksUrl];
    try {
      const requests = urlsArr.map((url) => fetch(url));
      const responses = await Promise.all(requests);

      const json = responses.map((response) => response.json());
      const data = await Promise.all(json);

      data.forEach((data) => {
        console.log(data);
        if (data.meals) {
          setFoodCategory(data.meals);
        } else {
          setDrinkCategory(data.drinks);
        }
      });
      setIsLoading(false);
      setQuery('');
    } catch {}
  };

  useEffect(() => {
    getAllIngredients();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getAllIngredients();
  };

  return (
    <div className="container">
      <h1>Recipe Application</h1>
      <SearchRecipe
        handleSubmit={handleSubmit}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        isLoading={isLoading}
      />

      <div className="recipes">
        {foodCategory
          ? foodCategory.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : 'No Recipes!'}
      </div>
      <h1>Drinks</h1>
      <div className="recipes">
        {drinksCategory
          ? drinksCategory.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))
          : 'No Recipes!'}
      </div>
    </div>
  );
};

export default App;
