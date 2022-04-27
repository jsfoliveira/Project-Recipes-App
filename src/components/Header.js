import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

export default function Header() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const headerText = () => {
    switch (pathname) {
    case '/igredients' || '/main' || '/':
      return 'Food';
    case '/explore':
      return 'Explore';
    case '/exploreFood' || '/favorites':
      return 'Explore Food';
    case '/favoriteRecipes':
      return 'Favorite Recipes';
    case '/doneRecipes':
      return 'Done Recipes';
    case '/profile':
      return 'Profile';
    case '/nationality':
      return 'Explore Nationalities';
    default:
      return 'Food';
    }
  };
  return (
    <header>
      {
        pathname !== '/*'
        && (
          <div className="header__user">
            <button data-testid="profile-top-btn" type="button">
              <img alt="profileIcon" src={ profileIcon } />
            </button>
            <h1 data-testid="page-title">{ headerText() }</h1>
            <button data-testid="page-title" type="button">
              <img alt="profileIcon" src={ searchIcon } />
            </button>
          </div>)
      }
    </header>
  );
}
