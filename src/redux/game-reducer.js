
const SET_NEW_PLAYER = 'SET_NEW_PLAYER',
      SET_PARTY_GAME = 'SET_PARTY_GAME',
      DELETE_PLAYER = 'DELETE_PLAYER',
      RESET_GAME = 'RESET_GAME',
      SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';

//const playerExample = {id: 1, name: 'lexx', cash: 0};

export const resetGame = () => {
  return {type: RESET_GAME}
}

export const setNewPlayer = (name, cash) => {
  return {
    type: SET_NEW_PLAYER,
    player: {
      name,
      cash
    }
  }
}

export const deletePlayer = (id) => {
  return {
    type: DELETE_PLAYER,
    id
  }
}

export const setPartyGame = (arr) => {
  return {
    type: SET_PARTY_GAME,
    arr
  };
}

// arr = [{id: score}, {id: score}, {id: score}]
export const setPlayerScore = (id, score) => {
  return {
    type: SET_PLAYER_SCORE,
    id,
    score
  }
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case SET_NEW_PLAYER:
      const id = (+new Date()).toString(16);
      const score = 15;

      return {...state, players: [...state.players, {...action.player, id, score}]};
    case SET_PLAYER_SCORE:
        const newScorePlayers = state.party[state.party.length - 1].players.map(item => {
          if (item.id === action.id) {
            return {...item, score: action.score};
          } else {
            return item;
          }
        });
        console.log(newScorePlayers);
        return {...state};
    case DELETE_PLAYER:
      return {...state, players: state.players.filter(item => {
          return item.id !== action.id;
        })
      }
    case SET_PARTY_GAME:
      const data = new Date();
      const scorePlayers = state.players.map(item => {
        for (let el of action.arr) {
          if (el.id === item.id) {
            return {...item, score: el.score, jack: el.isJack};
          }
        }

        return item;
      });

      return {...state, party: [...state.party, {id: (+new Date()).toString(16), data, players: scorePlayers}]};
    case RESET_GAME:
      return {...state, players: [], party: []};
    default: return state;
  }
}

export default gameReducer;
