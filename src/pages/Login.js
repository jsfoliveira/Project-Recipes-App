import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import APIlists from '../redux/action';
import {
  getCookListAllCategories, getListAllAlcoholics,
  getListAllCockIngredients, getListAllCooksGlasses,
} from '../services/fetchCockTails';
import {
  firstFoods, getListAllFoodAreas,
  getListAllFoodCategories, getListAllFoodIngredients,
  getListAllMealCategories,
} from '../services/fetchMeal';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      isButtonDisabled: true,
    };
  }

  async componentDidMount() {
    const { disp } = this.props;
    const DozenFoods = await firstFoods();
    const ListAllFoodCategories = await getListAllFoodCategories();
    const ListAllFoodAreas = await getListAllFoodAreas();
    const AllFoodIngredients = await getListAllFoodIngredients();
    const ListAllMealCategories = await getListAllMealCategories();
    const CookListAllCategories = await getCookListAllCategories();
    const ListAllCooksGlasses = await getListAllCooksGlasses();
    const ListAllCockIngredients = await getListAllCockIngredients();
    const ListAllAlcoholics = await getListAllAlcoholics();
    const objectList = {
      ListAllFoodCategories,
      DozenFoods,
      ListAllFoodAreas,
      AllFoodIngredients,
      ListAllMealCategories,
      CookListAllCategories,
      ListAllCooksGlasses,
      ListAllCockIngredients,
      ListAllAlcoholics,
    };
    disp(objectList);
    console.log(objectList);
  }

  validateForm = () => {
    const { emailInput, passwordInput } = this.state;
    const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberMin = 6;
    const passwordValidation = passwordInput.length > numberMin;
    const emailValidation = email.test(emailInput);

    if (emailValidation && passwordValidation) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
    // localStorage.setItem('mealsToken', JSON.stringify(1));
    // localStorage.setItem('cocktailsToken', JSON.stringify(1));
    // localStorage.setItem('user', JSON.stringify({ email: emailInput }));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.validateForm);
  }

  render() {
    const { emailInput, passwordInput, isButtonDisabled } = this.state;
    const { history } = this.props;
    return (
      <div className="login d-flex justify-content-center align-items-center">
        <form className="form-login">
          <div className="mb-3">
            <label
              htmlFor="emailInput"
              className="form-label"
            >
              Email address
              <input
                className="form-control"
                aria-describedby="emailHelp"
                id="emailInput"
                name="emailInput"
                type="text"
                value={ emailInput }
                onChange={ this.handleChange }
                data-testid="email-input"
              />
            </label>
          </div>
          <div className="mb-3">
            <label
              htmlFor="passwordInput"
              className="form-label"
            >
              Password
              <input
                className="form-control"
                id="passwordInput"
                type="password"
                name="passwordInput"
                value={ passwordInput }
                onChange={ this.handleChange }
                data-testid="password-input"
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary d-flex justify-content-center align-items-center"
            data-testid="login-submit-btn"
            disabled={ isButtonDisabled }
            onClick={ () => {
              localStorage.setItem('mealsToken', JSON.stringify(1));
              localStorage.setItem('cocktailsToken', JSON.stringify(1));
              localStorage.setItem('user', JSON.stringify({ email: emailInput }));
              history.push('/foods');
            } }
          >
            Enter
          </button>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  disp: propTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  disp: (objectList) => dispatch(APIlists(objectList)),
});

export default connect(null, mapDispatchToProps)(Login);
