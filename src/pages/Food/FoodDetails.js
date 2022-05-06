import React from 'react';
// import { useParams } from 'react-router-dom';
// import myContext from '../../context/myContext';
// import RequestDetails from '../../services/RequestDetails';
// import url from '../../services/url';

function FoodDetails() {
  // const { id } = useParams();
  // // const [recipe, setRecipe] = useState({});
  // // const [recommendations, setRecommendations] = useState([]);

  // useEffect(() => {
  //   const fetchRecipe = async () => {
  //     const RECIPE_URL = (type === 'Meal')
  //       ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  //       : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  //     const response = await fetch(RECIPE_URL);
  //     const result = await response.json();
  //     const fetchedRecipe = (type === 'Meal')
  //       ? result.meals[0]
  //       : result.drinks[0];
  //     setRecipe(fetchedRecipe);
  //     console.log(fetchedRecipe);
  //   };
  //   fetchRecipe();
  // }, [id, type]);

  // const key = 'food';

  // const apiDetails = async () => {
  //   const result = await RequestDetails(url(id)[key]);
  //   if (result) {
  //     setFoodDetailRecipes(result);
  //   } else setFoodDetailRecipes([]);
  // };

  // useEffect(() => {
  //   apiDetails();
  // });

  return (
    <div>
      FoodDetails
    </div>
  );
}

// FoodDetails.propTypes = {
//   type: PropTypes.string.isRequired,
// };

export default FoodDetails;
