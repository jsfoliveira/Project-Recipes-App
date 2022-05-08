import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterRedux from '../services/renderWithRouterRedux';

const PROFILE = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH = 'search-top-btn';
const SEARCH_INPUT = 'search-input';

describe('Header', () => {
  test('Não tem header na tela de login', () => {
    renderWithRouterRedux(<App />);

    const pageTitle = screen.queryByTestId(PAGE_TITLE);

    expect(pageTitle).not.toBeInTheDocument();
  });
  test(`O header tem os ícones corretos 
  na tela de principal de receitas de comidas`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/foods');

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.getByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
  test(`O header tem os ícones corretos na 
  tela de principal de receitas de bebidas`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/drinks');

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.getByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
  test(`Não tem header na tela de 
  detalhes de uma receita de comida`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/foods/:id');

    const pageTitle = screen.queryByTestId(PAGE_TITLE);

    expect(pageTitle).not.toBeInTheDocument();
  });
  test(`Não tem header na tela de 
  detalhes de uma receita de bebida`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/drinks/:id');

    const pageTitle = screen.queryByTestId(PAGE_TITLE);

    expect(pageTitle).not.toBeInTheDocument();
  });
  test(`Não tem header na tela de 
  receita em progresso de comida`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/foods/:id/in-progress');

    const pageTitle = screen.queryByTestId(PAGE_TITLE);

    expect(pageTitle).not.toBeInTheDocument();
  });
  test(` Não tem header na tela 
  de receita em progresso de bebida`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/drinks/:id/in-progress');

    const pageTitle = screen.queryByTestId(PAGE_TITLE);

    expect(pageTitle).not.toBeInTheDocument();
  });
  test(`O header tem os ícones 
  corretos na tela de explorar`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/explore');

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones corretos 
  na tela de explorar comidas`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/explore/foods');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones corretos 
  na tela de explorar bebidas`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/explore/drinks');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones corretos na 
  tela de explorar comidas por ingrediente`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/explore/foods/ingredients');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones corretos na 
  tela de explorar bebidas por ingrediente`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/explore/drinks/ingredients');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones corretos na 
  tela de explorar comidas por nacionalidade`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/explore/foods/nationalities');

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.getByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
  test(`O header tem os ícones 
  corretos na tela de perfil`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/profile');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones 
  corretos na tela de receitas feitas`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/done-recipes');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`O header tem os ícones 
  corretos na tela de receitas favoritas`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/favorite-recipes');
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    const profile = screen.getByTestId(PROFILE);
    const search = screen.queryByTestId(SEARCH);

    expect(pageTitle).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(search).not.toBeInTheDocument();
  });
  test(`Redirecione a pessoa usuária para a 
  tela de perfil ao clicar no botão de perfil`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/foods');

    const profile = screen.getByTestId(PROFILE);

    userEvent.click(profile);
    history.push('/profile');

    const { pathname } = history.location;
    expect(pathname).toBe('/profile');
  });
  test(`- Ao clicar no botão de busca 
  pela primeira vez a barra de busca aparece`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/foods');

    const search = screen.getByTestId(SEARCH);
    userEvent.click(search);

    const searchInput = screen.getByTestId(SEARCH_INPUT);
    expect(searchInput).toBeInTheDocument();
  });
  test(`Ao clicar no botão de busca pela 
  segunda vez a barra de busca desaparece`, () => {
    const { history } = renderWithRouterRedux(<App />);
    history.push('/foods');

    const search = screen.getByTestId(SEARCH);
    userEvent.click(search);
    userEvent.click(search);

    const searchInput = screen.queryByTestId(SEARCH_INPUT);
    expect(searchInput).not.toBeInTheDocument();
  });
});
