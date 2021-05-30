
const CREATE_PARTY_FORM = 'CREATE_PARTY_FORM',
      PARTY_FORM_RESET = 'PARTY_FORM_RESET',
      SET_JACK_CHECKED = 'SET_JACK_CHECKED';

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

export const partyFormReset = () => {
  return {
    type: PARTY_FORM_RESET
  }
}

const initialState = {
  partyForm: [],
  jackCount: 0
};

const partyFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_FORM:
      const newPartyForm = action.arrPlayers.map(item => {
        return { ...item, jackChecked: false };
      });

      return { ...state, partyForm: newPartyForm };
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
          numberOfBribes: 0,
          canTaceBribs: 5,
          isJack: false,
        };
      });

      return { ...state, partyForm: partyFormReset, jackCount: 0 };
    default:
     return state;
  }
}

export default partyFormReducer;
