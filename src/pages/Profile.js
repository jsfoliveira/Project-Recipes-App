import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
      <h1
        data-testid="profile-email"
      >
        {loginEmail}
      </h1>
      <Link to="/done-recipes">
        <button
          type="submit"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="submit"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>
      <Link to="/">
        <button
          type="submit"
          data-testid="profile-logout-btn"
          onClick={ clear }
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}
export default Profile;
