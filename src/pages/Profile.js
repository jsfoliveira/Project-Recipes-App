import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Profile.css';

function Profile() {
  const [loginEmail, setLoginEmail] = useState('');
  const clear = () => {
    localStorage.clear();
  };
  useEffect(() => {
    const emailLocalStorage = () => {
      const userObjeto = JSON.parse(localStorage.getItem('user'));
      if (userObjeto) {
        const dataEmail = userObjeto.email;
        setLoginEmail(dataEmail);
      }
    };
    emailLocalStorage();
  }, []);
  return (
    <div>
      <Header />
      <div className="profile-container">
        <h1 data-testid="profile-email" className="profile-email">{loginEmail}</h1>
        <Link to="/done-recipes">
          <button
            type="submit"
            data-testid="profile-done-btn"
            className="profile-button"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            type="submit"
            data-testid="profile-favorite-btn"
            className="profile-button"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="submit"
            data-testid="profile-logout-btn"
            className="profile-button"
            onClick={ clear }
          >
            Logout
          </button>
        </Link>
        <Footer />
      </div>
    </div>
  );
}
export default Profile;
