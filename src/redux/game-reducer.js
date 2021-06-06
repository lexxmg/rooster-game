
const SET_PARTY_GAME = 'SET_PARTY_GAME';

//const playerExample = {id: 1, name: 'lexx', cash: 0};

export const setPartyGame = (players) => {
  return {
    type: SET_PARTY_GAME,
    players
  }
}

const initialSate = {
  party: [],
  partyCount: 0
}


const gameReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_PARTY_GAME:
      const data = new Date();

      return {...state, party: [ ...state.party,
        {
          id: (+new Date()).toString(16),
          data, players: [ ...action.players ]
        }
      ]};
    default: return state;
  }
}

export default gameReducer;
