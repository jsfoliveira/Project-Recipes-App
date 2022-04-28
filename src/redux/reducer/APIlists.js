const INITIAL_STATE = {};

const API = (state = INITIAL_STATE, action) => {
  const { objectList } = action;
  switch (action.type) {
  case 'API':
    return {
      ...state,
      objectList,
    };
  default:
    return state;
  }
};

export default API;
