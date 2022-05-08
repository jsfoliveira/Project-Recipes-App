import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Login from '../pages/Login';
import renderWithRouterRedux from '../services/renderWithRouterRedux';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_SUBMIT_BTN = 'login-submit-btn';
const TEST_MAIL = 'test@test.com';

describe('Página de Login', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });
  test('Verifica data-testid="email-input"', () => {
    renderWithRouterRedux(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    expect(inputEmail).toBeInTheDocument();
  });
  test('Verifica data-testid="password-input"', () => {
    renderWithRouterRedux(<Login />);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    expect(inputPassword).toBeInTheDocument();
  });
  test('Verifica data-testid="login-submit-btn"', () => {
    renderWithRouterRedux(<Login />);
    const loginBtn = screen.getByTestId('login-submit-btn');
    expect(loginBtn).toBeInTheDocument();
  });
  test('Verifica se é possível escrever o email', () => {
    renderWithRouterRedux(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    userEvent.type(inputEmail, 'test@test');
    expect(inputEmail.value).toBe('test@test');
  });
  test('Verifica se é possível escrever a senha', () => {
    renderWithRouterRedux(<Login />);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    userEvent.type(inputPassword, 'test1234');
    expect(inputPassword.value).toBe('test1234');
  });
  test('O botão deve estar desativado se o email for inválido', () => {
    renderWithRouterRedux(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const loginBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(inputEmail, 'test@test');
    userEvent.type(inputPassword, 'test1234');

    expect(loginBtn).toBeDisabled();
  });
  test(`O botão deve estar desativado se a 
  senha deve tiver 6 caracteres ou menos`, () => {
    renderWithRouterRedux(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const loginBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(inputEmail, TEST_MAIL);
    userEvent.type(inputPassword, 'test');

    expect(loginBtn).toBeDisabled();
  });
  test(`O botão deve estar ativado 
  se o email e a senha forem válidos`, () => {
    renderWithRouterRedux(<Login />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const loginBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(inputEmail, 'claudio@test.com');
    userEvent.type(inputPassword, 'test1234');

    expect(loginBtn).not.toBeDisabled();
  });
  test(`Após a submissão mealsToken e 
  cocktailsToken devem estar salvos em localStorage`, () => {
    renderWithRouterRedux(<App />);

    const THREE = 3;

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const loginBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(inputEmail, 'claudio@test.com');
    userEvent.type(inputPassword, 'test1234');
    userEvent.click(loginBtn);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(THREE);
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('mealsToken', JSON.stringify(1));
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('cocktailsToken', JSON.stringify(1));
  });
  test(`Após a submissão a chave 
  user deve estar salva em localStorage`, () => {
    renderWithRouterRedux(<App />);

    const THREE = 3;

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const loginBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(inputEmail, TEST_MAIL);
    userEvent.type(inputPassword, 'test1234');
    userEvent.click(loginBtn);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(THREE);
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('mealsToken', JSON.stringify(1));
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('cocktailsToken', JSON.stringify(1));
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('user', JSON.stringify({ email: 'test@test.com' }));
  });
  test(`A rota muda para a tela 
  principal de receitas de comidas após validação e submissão`, () => {
    const { history } = renderWithRouterRedux(<App />);

    const THREE = 3;

    const inputEmail = screen.getByTestId(EMAIL_INPUT);
    const inputPassword = screen.getByTestId(PASSWORD_INPUT);
    const loginBtn = screen.getByTestId(LOGIN_SUBMIT_BTN);

    userEvent.type(inputEmail, 'claudio@mail.com');
    userEvent.type(inputPassword, 'test1234');
    userEvent.click(loginBtn);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(THREE);
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('mealsToken', JSON.stringify(1));
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('cocktailsToken', JSON.stringify(1));
    expect(window.localStorage.setItem)
      .toHaveBeenCalledWith('user', JSON.stringify({ email: 'claudio@mail.com' }));

    history.push('/foods');
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
