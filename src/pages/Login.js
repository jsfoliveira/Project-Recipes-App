import React from 'react';
import { Link } from 'react-router-dom';
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

  validateForm = () => {
    const { emailInput, passwordInput } = this.state;
    const email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberMin = 6;
    const passwordValidation = passwordInput.length > numberMin;
    const emailValidation = emailInput.match(email);
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
          <Link to="/foods">
            <button
              type="submit"
              className="btn btn-primary d-flex justify-content-center align-items-center"
              data-testid="login-submit-btn"
              disabled={ isButtonDisabled }
            >
              Enter
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
