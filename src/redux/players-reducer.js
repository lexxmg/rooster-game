
const CREATE_NEW_PLAYER = 'CREATE_NEW_PLAYER',
      SET_CASH_PLAYER = 'SET_CASH_PLAYER',
      DELETE_PLAYER = 'DELETE_PLAYER',
      SET_OF_BRIBES = 'SET_OF_BRIBES',
      RESET_PLEYERS = 'RESET_PLEYERS';

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

export const setOfBribes = (id, numberOfBribes, isJack) => {
  return {
    type: SET_OF_BRIBES,
    id,
    numberOfBribes,
    isJack
  }
}

export const resetPlayers = () => {
  return {
    type: RESET_PLEYERS
  }
}


const initialSate = {
  players: [],
  playerCount: 0,
  someWin: false
}

const playersReducer = (state = initialSate, action) => {
  let someWin = false;

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

      return { ...state, players: newPlayersArray, playerCount: state.playerCount - 1 };
    case SET_OF_BRIBES:
      return { ...state, players: state.players.map(item => {
          if ( item.id !== action.id ) return item;
          if ( action.isJack && action.numberOfBribes !== 0 ) {
            someWin = ( item.score - (action.numberOfBribes + 5) <= 0 );

            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              isJack: action.isJack,
              score: item.score - (action.numberOfBribes + 5),
              isWin: ( item.score - (action.numberOfBribes + 5) <= 0 )
            };
          } else if ( action.isJack && action.numberOfBribes === 0 ) {
            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              isJack: action.isJack,
              cross: true,
              crossCount: (item.crossCount + 1)
            };
          } else if ( !action.isJack && action.numberOfBribes !== 0 ) {
            someWin = ( item.score - action.numberOfBribes <= 0 );

            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              isJack: action.isJack,
              score: item.score - action.numberOfBribes,
              isWin: ( item.score - action.numberOfBribes <= 0 )
            };
          } else if ( !action.isJack && action.numberOfBribes === 0 && item.score > 10 ) {
            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              isJack: action.isJack,
              wheel: true,
              wheelCount: (item.wheelCount + 1)
            };
          } else if ( !action.isJack && action.numberOfBribes === 0 && item.score <= 10 ) {
            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              isJack: action.isJack,
              score: (item.score + 5),
              wheel: true,
              wheelCount: (item.wheelCount + 1)
            };
          } return item;
        }), someWin: someWin };
    case RESET_PLEYERS:
      return { ...state, players: state.players.map(item => {
          return { ...item,
            isTouched: false,
            score: 15,
            numberOfBribes: 0,
            isJack: false,
            cross: false,
            wheel: false,
            crossCount: 0,
            wheelCount: 0,
            isWin: false
          }
        }), someWin: false };
    default:
      return state;
  }
};

export default playersReducer;
