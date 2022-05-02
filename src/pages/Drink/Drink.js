import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SearchBar from '../../components/searchBar';

function Drink() {
  return (
    <>
      <Header />
      <SearchBar type="drinks" />
      <Footer />
    </>

  );
}

export default Drink;
