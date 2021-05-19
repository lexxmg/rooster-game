
const SET_NEW_PLAYER = 'SET_NEW_PLAYER',
      SET_CACH_PLAYER = 'SET_CACH_PLAYER',
      RESET_PLAYER = 'RESET_PLAYER',
      SET_PARTY_GAME = 'SET_PARTY_GAME',
      DELETE_PLAYER = 'DELETE_PLAYER',
      RESET_GAME = 'RESET_GAME',
      SET_PLAYER_POINT = 'SET_PLAYER_POINT',
      SET_PARTY_WIN = 'SET_PARTY_WIN',
      SET_PLAYER_WHEEL_INCREMENT = 'SET_PLAYER_WHEEL_INCREMENT',
      SET_PLAYER_CROSS_INCREMENT = 'SET_PLAYER_CROSS_INCREMENT';

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

export const setCachPlayer = (id, cash) => {
  return {
    type: SET_CACH_PLAYER,
    id,
    cash
  }
}

export const resetPlayer = () => {
  return {
    type: RESET_PLAYER
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

export const setPlayerWheelIncrement = (id) => {
  return {
    type: SET_PLAYER_WHEEL_INCREMENT,
    id
  }
}

export const setPlayerCrossIncrement = (id) => {
  return {
    type: SET_PLAYER_CROSS_INCREMENT,
    id
  }
}

const initialSate = {
  players: [],
  party: [],
  gameBet: {game: 10, wheel: 5, cross: 10}
}


const gameReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_NEW_PLAYER:
      const id = (+new Date()).toString(16);
      const point = 15;

      return {...state,
        players: [...state.players,
          {...action.player, id, point, wheelCount: 0, crossCount: 0}
        ]
      };
    case SET_CACH_PLAYER:
      return { ...state, players: state.players.map(item => {
          if (item.id === action.id) {
            return { ...item, cash: action.cash };
          } else {
            return item;
          }
        })
      };
    case RESET_PLAYER:
      return {...state, players: state.players.map(item => {
        return {...item, point: 15, wheelCount: 0, crossCount: 0}
      })};
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
              isWin: el.isWin, gain: el, losing: el
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
    case SET_PLAYER_WHEEL_INCREMENT:
      return {...state, players: state.players.map(item => {
        if (item.id === action.id) {
          return {...item, wheelCount: item.wheelCount + 1};
        } else {
          return item;
        }
      })};
    case SET_PLAYER_CROSS_INCREMENT:
      return {...state, players: state.players.map(item => {
        if (item.id === action.id) {
          return {...item, crossCount: item.crossCount + 1};
        } else {
          return item;
        }
      })};
    case RESET_GAME:
      return {...state, players: [], party: []};
    default: return state;
  }
}

export default gameReducer;
