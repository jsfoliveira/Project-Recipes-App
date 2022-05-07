import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

const renderWithRouterRedux = (
  component,
  { initialState = {},
    store = createStore(reducer, initialState),
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) => ({ ...render(
  <Router history={ history }>
    <Provider store={ store }>
      {component}
    </Provider>
  </Router>,
),
history });

export default renderWithRouterRedux;
