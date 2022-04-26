import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      isButtonDisabled: true,
    };
  }

  validateForm = () => {
    const { emailInput, passwordInput } = this.state;
    const numberMin = 6;
    const passwordValidation = passwordInput.length >= numberMin;
    const emailValidation = emailInput.match(/\S+@\S+\.\S+/);
    if (emailValidation && passwordValidation) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email: emailInput }));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.validateForm);
  }

  render() {
    const { emailInput, passwordInput, isButtonDisabled } = this.state;
    return (
      <form>
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            name="emailInput"
            type="text"
            value={ emailInput }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            id="passwordInput"
            type="text"
            name="passwordInput"
            value={ passwordInput }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <Link to="/foods">
          <button
            type="button"
            disabled={ isButtonDisabled }
            data-testid="login-submit-btn"
          >
            Enter
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
