
const SET_BET = 'SET_BET',
      DELETE_BET = 'DELETE_BET';

const initialSate = {
  game: 0,
  wheel: 0,
  cross: 0
}

export const setBet = (game, wheel, cross) => {
  return {
    type: SET_BET,
    game,
    wheel,
    cross
  }
};

export const deleteBet= () => {
  return {
    type: DELETE_BET
  }
};

const betReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_BET:
      return { ...state, game: action.game, wheel: action.wheel, cross: action.cross };
    case DELETE_BET:
      return { ...state, game: 0, wheel: 0, cross: 0 };
    default:
      return state;
  }
};

export default betReducer;
