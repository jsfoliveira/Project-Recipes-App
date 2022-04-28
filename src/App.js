import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';
import DoneRecipes from './pages/DoneRecipes';
import Drink from './pages/Drink/Drink';
import DrinkDetails from './pages/Drink/DrinkDetails';
import DrinkProgress from './pages/Drink/DrinkProgess';
import DrinkIngredients from './pages/Explore/DrinkIngredients';
import Explore from './pages/Explore/Explore';
import ExploreDrinks from './pages/Explore/ExploreDrinks';
import ExploreFoods from './pages/Explore/ExploreFoods';
import FoodIngredients from './pages/Explore/FoodIngredients';
import FoodNationalities from './pages/Explore/FoodNationalities';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Food from './pages/Food/Food';
import FoodDetails from './pages/Food/FoodDetails';
import FoodProgress from './pages/Food/FoodProgress';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Food } />
        <Route path="/drinks" component={ Drink } />
        <Route path="/explore" component={ Explore } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/foods/:id" component={ FoodDetails } />
        <Route path="/drinks/:id" component={ DrinkDetails } />
        <Route path="/foods/:id/in-progress" component={ FoodProgress } />
        <Route path="/drinks/:id/in-progress" component={ DrinkProgress } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/foods/ingredients" component={ FoodIngredients } />
        <Route path="/explore/drinks/ingredients" component={ DrinkIngredients } />
        <Route path="/explore/foods/nationalities" component={ FoodNationalities } />
      </Switch>
    </Provider>
  );
}

export default App;
