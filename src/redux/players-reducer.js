
const CREATE_NEW_PLAYER = 'CREATE_NEW_PLAYER',
      SET_CASH_PLAYER = 'SET_CASH_PLAYER',
      DELETE_PLAYER = 'DELETE_PLAYER';

export const createNewPlayer = (name, cash) => {
  return {
    type: CREATE_NEW_PLAYER,
    name,
    cash
  }
};

export const setCashPlayer = (id, cash) => {
  return {
    type: SET_CASH_PLAYER,
    id,
    cash
  }
}

export const deletePlayer = (id) => {
  return {
    type: DELETE_PLAYER,
    id
  }
}

const initialSate = {
  players: []
}

const playersReducer = (state = initialSate, action) => {
  switch (action.type) {
    case CREATE_NEW_PLAYER:
      const player = {
        id: (+new Date()).toString(16),
        name: action.name,
        cash: action.cash
      };

      return { ...state, players: [...state.players, player] };
    case SET_CASH_PLAYER:
      const newPlaerCash = state.players.map(item => {
        if (item.id !== action.id)  return item;
        return { ...item, cash: action.cash };
      });

      return { ...state, players: newPlaerCash };
    case DELETE_PLAYER:
      const newPlayersArray = state.players.filter(item => {
        return item.id !== action.id;
      });

      return { ...state,players: newPlayersArray };
    default:
      return state;
  }
};

export default playersReducer;
