import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './styles/Header.css';

const titles = {
  '/main': 'Foods',
  '/drinks': 'Drinks',
  '/ingredients': 'Foods',
  '/foods': 'Foods',
  '/explore': 'Explore',
  '/explore/foods': 'Explore Foods',
  '/explore/drinks': 'Explore Drinks',
  '/explore/foods/ingredients': 'Explore Ingredients',
  '/explore/drinks/ingredients': 'Explore Ingredients',
  '/explore/foods/nationalities': 'Explore Nationalities',
  '/favorites': 'Explore Foods',
  '/favorite-recipes': 'Favorite Recipes',
  '/done-recipes': 'Done Recipes',
  '/profile': 'Profile',
  '/nationality': 'Explore Nationalities',
};

const renderSearch = (path) => {
  if (path === '/foods' || path === '/nationality' || path === '/drinks'
  || path === '/explore/foods/nationalities') {
    return (
      <button type="button">
        <img data-testid="search-top-btn" alt="profileIcon" src={ searchIcon } />
      </button>
    );
  }
};

export default function Header() {
  // const { headerText, setHeaderText, path, setPath } = useContext(myContext);
  const history = useHistory();
  const { location: { pathname } } = history;
  return (
    <header>
      <div className="header__user">
        <button type="button">
          <img data-testid="profile-top-btn" alt="profileIcon" src={ profileIcon } />
        </button>
        <h1 data-testid="page-title">{ titles[pathname] }</h1>
        { renderSearch(pathname)}
      </div>
    </header>
  );
}
