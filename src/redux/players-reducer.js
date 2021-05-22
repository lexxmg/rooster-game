
const CREATE_NEW_PLAYER = 'CREATE_NEW_PLAYER',
      SET_CASH_PLAYER = 'SET_CASH_PLAYER',
      DELETE_PLAYER = 'DELETE_PLAYER',
      SET_OF_BRIBES = 'SET_OF_BRIBES',
      SET_CROSS_WHEEL = 'SET_OF_BRIBES_CALC',
      SET_CROSS_WHEEL_COUNT = 'SET_CROSS_WHEEL_COUNT',
      SET_IS_WIN = 'SET_IS_WIN';

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

export const setOfBribes = (id, numberOfBribes) => {
  return {
    type: SET_OF_BRIBES,
    id,
    numberOfBribes
  }
}

export const setCrossWheel = (id, cross, wheel) => {
  return {
    type: SET_CROSS_WHEEL,
    id,
    cross,
    wheel
  }
}

export const setCrossWheelCount = (id, crossCount, wheelCount) => {
  return {
    type: SET_CROSS_WHEEL_COUNT,
    id,
    crossCount,
    wheelCount
  }
}

export const setIsWin = (id, isWin) => {
  return {
    type: SET_IS_WIN,
    id,
    isWin
  }
}

export const setOfBribesCalc = (id, numberOfBribes, isJack) => {
  if (isJack) {
    numberOfBribes = numberOfBribes + 5;
  }

  return dispatch => {
    dispatch( setOfBribes(id, numberOfBribes) );
  }
}

const initialSate = {
  players: [],
  playerCount: 0
}

const playersReducer = (state = initialSate, action) => {
  switch (action.type) {
    case CREATE_NEW_PLAYER:
      const player = {
        id: (+new Date()).toString(16),
        name: action.name,
        cash: action.cash,
        isTouched: false,
        score: 15,
        numberOfBribes: 0,
        isJack: false,
        cross: false,
        wheel: false,
        crossCount: 0,
        wheelCount: 0,
        isWin: false
      };

      return { ...state, players: [...state.players, player], playerCount: state.playerCount + 1 };
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

      return { ...state,players: newPlayersArray, playerCount: state.playerCount - 1 };
    case SET_OF_BRIBES:
      return { ...state, players: state.players.map(item => {
          if ( item.id !== action.id ) return item;
          return { ...item, numberOfBribes: action.numberOfBribes };
        })
      };
    case SET_CROSS_WHEEL:
      return { ...state, players: state.players.map(item => {
          if ( item.id !== action.id ) return item;
          return { ...item, cross: action.cross, wheel: action.wheel };
        })
      };
    case SET_CROSS_WHEEL_COUNT:
      return { ...state, players: state.players.map(item => {
          if ( item.id !== action.id ) return item;
          return { ...item, crossCount: action.crossCount, wheelCount: action.wheelCount };
        })
      };
    case SET_IS_WIN:
      return { ...state, players: state.players.map(item => {
          if ( item.id !== action.id ) return item;
          return { ...item, isWin: action.isWin };
        })
      };
    default:
      return state;
  }
};

export default playersReducer;
