import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/myContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './styles/Header.css';

export default function Header() {
  const { headerText, setHeaderText, path, setPath } = useContext(myContext);
  const history = useHistory();
  useEffect(() => {
    const { location: { pathname } } = history;
    setPath(pathname);
    console.log(path);
    switch (pathname) {
    case '/main':
      return setHeaderText('Food');
    case '/ingredients':
      return setHeaderText('Food');
    case '/foods':
      return setHeaderText('Food');
    case '/explore':
      return 'Explore';
    case '/exploreFood':
      return setHeaderText('Explore Food');
    case '/favorites':
      return setHeaderText('Explore Food');
    case '/favoriteRecipes':
      return setHeaderText('Favorite Recipes');
    case '/doneRecipes':
      return setHeaderText('Done Recipes');
    case '/profile':
      return setHeaderText('Profile');
    case '/nationality':
      return setHeaderText('Explore Nationalities');
    default:
      return setHeaderText('Default');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      {path !== '/'
      && (
        <div className="header__user">
          <button type="button">
            <img data-testid="profile-top-btn" alt="profileIcon" src={ profileIcon } />
          </button>
          <h1 data-testid="page-title">{ headerText }</h1>
          <button type="button">
            <img data-testid="search-top-btn" alt="profileIcon" src={ searchIcon } />
          </button>
        </div>)}
    </header>
  );
}
