// import React from 'react';
// import userEvent from '@testing-library/user-event';
// import { screen } from '@testing-library/react';
// import renderWithRouter from '../renderWithRouter';
// import Login from '../pages/Login';
// import App from '../App';

// describe('Existem os inputs do email e da senha, bem como o botão de enviar', () => {
//   it('Se tem um input de email', () => {
//     const { history } = renderWithRouter(<App />);
//     const inputEmail = screen.getByTestId('email-input');
//     expect(inputEmail).toBeInTheDocument();
//   });
//   it('Se tem um input de password', () => {
//     const { history } = renderWithRouter(<App />);
//     const inputPassword = screen.getByTestId('password-input');
//     expect(inputPassword).toBeInTheDocument();
//   it('Se tem um botão', () => {
//     renderWithRouter(<Login />);
//   });
//   it('Se ao clicar no botão, seja redirecionado para /foods', () => {
//     const { history } = renderWithRouter(<App />);
//     const btnEnviar = screen.getByTestId('login-submit-btn');
//     userEvent.click(btnEnviar);
//     history.push('./foods');
//     const { pathname } = history.location;
//     expect(pathname).toBe('./foods');
//   });
// });
