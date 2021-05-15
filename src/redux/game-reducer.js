
const SET_NEW_PLAYER = 'SET_NEW_PLAYER',
      SET_PARTY_GAME = 'SET_PARTY_GAME',
      DELETE_PLAYER = 'DELETE_PLAYER',
      RESET_GAME = 'RESET_GAME',
      SET_PLAYER_POINT = 'SET_PLAYER_POINT',
      SET_PARTY_WIN = 'SET_PARTY_WIN';

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
export const setPartyWin = (arr) => {
  return {
    type: SET_PARTY_WIN,
    arr
  };
}

export const setPlayerPoint = (arr) => {
  return {
    type: SET_PLAYER_POINT,
    arr
  }
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case SET_NEW_PLAYER:
      const id = (+new Date()).toString(16);
      const point = 15;

      return {...state, players: [...state.players, {...action.player, id, point}]};
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
            return {...item, score: el.score, point: el.point,
              jack: el.isJack, cross: el.cross, wheel: el.wheel,
              isWin: el.isWin
            }
          }
        }

        return item;
      });

      return {...state, party: [...state.party,
        {
          id: (+new Date()).toString(16),
          data, players: scorePlayers, isSomeWin: false
        }
      ]};
      case SET_PARTY_WIN:
        const dataWin = new Date();
        const scorePlayersWin = state.players.map(item => {
          for (let el of action.arr) {
            if (el.id === item.id) {
              return {...item, score: el.score, point: el.point,
                jack: el.isJack, cross: el.cross, wheel: el.wheel,
                isWin: el.isWin
              }
            }
          }

          return item;
        });

        return {...state, party: [...state.party,
          {
            id: (+new Date()).toString(16),
            data: dataWin, players: scorePlayersWin, isSomeWin: true
          }
        ]};
    case SET_PLAYER_POINT:
      const newPoint = state.players.map((item, i) => {
        return {...item, point: action.arr.find(el => el.id === item.id).point};
      });
      //console.log(newPoint);

      return {...state, players: newPoint};
    case RESET_GAME:
      return {...state, players: [], party: []};
    default: return state;
  }
}

export default gameReducer;
