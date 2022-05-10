import React, { useEffect, useState } from 'react';
import CardDrink from '../../components/CardDrink';
import { getListOfRecomendations } from '../../services/fetchCockTails';

function DrinksRecomedations() {
  const [recomendation, setRecomendation] = useState([]);
  const [loading, setLoading] = useState(true);

  const Recomedation = async () => {
    setLoading(true);
    const data = await getListOfRecomendations();
    const { drinks } = await data;
    await setRecomendation(drinks);
    setLoading(false);
  };

  useEffect(() => {
    Recomedation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const max = 6;
  return (
    <ul className="carrossel">
      {!loading && recomendation.length
        && recomendation.map((element, i) => {
          const { strDrinkThumb, idDrink, strDrink } = element;
          return (i < max
                && (
                  <li key={ strDrink } data-testid={ `${i}-recomendation-card` }>
                    {' '}
                    <h3 data-testid={ `${i}-recomendation-title` }>{strDrink}</h3>
                    <CardDrink
                      key={ i }
                      index={ i }
                      strDrinkThumb={ strDrinkThumb }
                      strDrink={ strDrink }
                      id={ idDrink }
                    />
                    {' '}
                  </li>));
        })}
    </ul>);
}

export default DrinksRecomedations;
