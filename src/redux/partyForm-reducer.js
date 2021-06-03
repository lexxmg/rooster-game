
const CREATE_PARTY_FORM = 'CREATE_PARTY_FORM',
      PARTY_FORM_RESET = 'PARTY_FORM_RESET',
      SET_JACK_CHECKED = 'SET_JACK_CHECKED',
      SET_BRIBES_FORM_PARTY = 'SET_BRIBES_FORM_PARTY';

export const createPartyForm = (arrPlayers) => {
  return {
    type: CREATE_PARTY_FORM,
    arrPlayers
  }
}

export const setJackChecked = (id, checked) => {
  return {
    type: SET_JACK_CHECKED,
    id,
    checked
  }
};

export const setOfBribesFormParty = (id, numberOfBribes) => {
  return {
    type: SET_BRIBES_FORM_PARTY,
    id,
    numberOfBribes
  };
};

export const partyFormReset = () => {
  return {
    type: PARTY_FORM_RESET
  }
};

const initialState = {
  partyForm: [],
  jackCount: 0,
  allBribesCount: 0,
  touchedCount: 0
};

const partyFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_FORM:
      const newPartyForm = action.arrPlayers.map(item => {
        return { ...item,
          jackChecked: false,
          canTaceBribs: [0, 1, 2, 3, 4, 5]
        };
      });

      return { ...state, partyForm: newPartyForm };
    case SET_BRIBES_FORM_PARTY:
      const newPartyFormBribes = state.partyForm.map(item => {
        if (item.id === action.id) {
          return { ...item,
            numberOfBribes: action.numberOfBribes,
            isTouched: true,
            canTaceBribs: []
          };
        } else {
          return { ...item,
            canTaceBribs: item.canTaceBribs.filter(item => {
              if ( state.partyForm.length - (state.touchedCount + 1) > 1 ) {
                return ( action.numberOfBribes + item <= 5 );
              } else {
                return ( state.allBribesCount + action.numberOfBribes + item === 5 );
              }
            })
          };
        }
      });

      return { ...state,
        partyForm: newPartyFormBribes,
        allBribesCount: state.allBribesCount + action.numberOfBribes,
        touchedCount: state.touchedCount + 1,
      };
    case SET_JACK_CHECKED:
      const newPlayerChecked = state.partyForm.map(item => {
        if (item.id !== action.id)  return item;
        return { ...item, jackChecked: action.checked };
      });
      let jackCount = 0;
      newPlayerChecked.forEach(item => { if (item.jackChecked) ++jackCount });

      return { ...state, partyForm: newPlayerChecked, jackCount: jackCount };
    case PARTY_FORM_RESET:
      const partyFormReset = state.partyForm.map(item => {
        return { ...item,
          jackChecked: false,
          isTouched: false,
          numberOfBribes: 0,
          canTaceBribs: [0, 1, 2, 3, 4, 5],
          isJack: false,
        };
      });

      return { ...state,
        partyForm: partyFormReset,
        jackCount: 0,
        allBribesCount: 0,
        touchedCount: 0
      };
    default:
     return state;
  }
}

export default partyFormReducer;
