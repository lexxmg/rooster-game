
const CREATE_NEW_PLAYER = 'CREATE_NEW_PLAYER',
      SET_CASH_PLAYER = 'SET_CASH_PLAYER',
      SET_GAIN_AND_LOSING = 'SET_GAIN_AND_LOSING',
      DELETE_PLAYER = 'DELETE_PLAYER',
      SET_OF_BRIBES = 'SET_OF_BRIBES',
      SET_JACK_CHECKED = 'SET_JACK_CHECKED',
      RESET_PLEYERS = 'RESET_PLEYERS',
      DELETE_PLEYERS = 'DELETE_PLEYERS';

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
};

export const setJackChecked = (id, checked) => {
  return {
    type: SET_JACK_CHECKED,
    id,
    checked
  }
};

export const deletePlayer = (id) => {
  return {
    type: DELETE_PLAYER,
    id
  }
};

export const setOfBribes = (id, numberOfBribes, isJack) => {
  return {
    type: SET_OF_BRIBES,
    id,
    numberOfBribes,
    isJack
  }
};

export const setGainAndLosing = (id, gain, losing) => {
  return {
    type: SET_GAIN_AND_LOSING,
    id,
    gain,
    losing
  }
};

export const resetPlayers = () => {
  return {
    type: RESET_PLEYERS
  }
}

export const deletePlayers = () => {
  return {
    type: DELETE_PLEYERS
  }
};

const initialSate = {
  players: [],
  playerCount: 0,
  someWin: false
};

const playersReducer = (state = initialSate, action) => {
  let someWin = false;

  switch (action.type) {
    case CREATE_NEW_PLAYER:
      const player = {
        id: (+new Date()).toString(16),
        name: action.name,
        cash: action.cash,
        gain: 0,
        losing: 0,
        isTouched: false,
        score: 15,
        numberOfBribes: 0,
        canTaceBribs: 5,
        isJack: false,
        jackChecked: false,
        cross: false,
        wheel: false,
        crossCount: 0,
        wheelCount: 0,
        isWin: false
      };

      return { ...state, players: [...state.players, player], playerCount: state.playerCount + 1 };
    case SET_CASH_PLAYER:
      const newPlayerCash = state.players.map(item => {
        if (item.id !== action.id)  return item;
        return { ...item, cash: action.cash };
      });

      return { ...state, players: newPlayerCash };
    case SET_JACK_CHECKED:
      const newPlayerChecked = state.players.map(item => {
        if (item.id !== action.id)  return item;
        return { ...item, jackChecked: action.checked };
      });

      return { ...state, players: newPlayerChecked };
    case DELETE_PLAYER:
      const newPlayersArray = state.players.filter(item => {
        return item.id !== action.id;
      });

      return { ...state, players: newPlayersArray, playerCount: state.playerCount - 1 };
    case SET_OF_BRIBES:
      return { ...state, players: state.players.map(item => {
          if ( item.id !== action.id ) return { ...item, canTaceBribs: item.canTaceBribs - action.numberOfBribes };
          if ( action.isJack && action.numberOfBribes !== 0 ) {
            someWin = ( item.score - (action.numberOfBribes + 5) <= 0 );

            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              canTaceBribs: 0,
              isJack: action.isJack,
              score: item.score - (action.numberOfBribes + 5),
              isWin: ( item.score - (action.numberOfBribes + 5) <= 0 )
            };
          } else if ( action.isJack && action.numberOfBribes === 0 ) {
            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              canTaceBribs: 0,
              isJack: action.isJack,
              cross: true,
              crossCount: (item.crossCount + 1)
            };
          } else if ( !action.isJack && action.numberOfBribes !== 0 ) {
            someWin = ( item.score - action.numberOfBribes <= 0 );

            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              canTaceBribs: 0,
              isJack: action.isJack,
              score: item.score - action.numberOfBribes,
              isWin: ( item.score - action.numberOfBribes <= 0 )
            };
          } else if ( !action.isJack && action.numberOfBribes === 0 && item.score > 10 ) {
            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              canTaceBribs: 0,
              isJack: action.isJack,
              wheel: true,
              wheelCount: (item.wheelCount + 1)
            };
          } else if ( !action.isJack && action.numberOfBribes === 0 && item.score <= 10 ) {
            return { ...item,
              isTouched: true,
              numberOfBribes: action.numberOfBribes,
              canTaceBribs: 0,
              isJack: action.isJack,
              score: (item.score + 5),
              wheel: true,
              wheelCount: (item.wheelCount + 1)
            };
          } return item;
        }), someWin: someWin };
    case SET_GAIN_AND_LOSING:
      return { ...state, players: state.players.map(item => {
          if (item.id !== action.id) return item;
          return { ...item, gain: action.gain, losing: action.losing };
        })
      };
    case RESET_PLEYERS:
      return { ...state, players: state.players.map(item => {
          return { ...item,
            isTouched: false,
            gain: 0,
            losing: 0,
            score: 15,
            numberOfBribes: 0,
            canTaceBribs: 5,
            isJack: false,
            jackChecked: false,
            cross: false,
            wheel: false,
            crossCount: 0,
            wheelCount: 0,
            isWin: false
          }
        }), someWin: false };
    case DELETE_PLEYERS:
      return { ...state, players: [], playerCount: 0, someWin: false };
    default:
      return state;
  }
};

export default playersReducer;
