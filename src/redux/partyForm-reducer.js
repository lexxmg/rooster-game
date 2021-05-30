
const CREATE_PARTY_FORM = 'CREATE_PARTY_FORM';

const initialState = {
  partyForm: []
};

export const createPartyForm = (arrPlayers) => {
  return {
    type: CREATE_PARTY_FORM,
    arrPlayers
  }
}

const partyFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_FORM:
      const newPartyForm = action.arrPlayers.map(item => {
        return { ...item };
      });

      return { ...state, partyForm: newPartyForm };
    default:
     return state;
  }
}

export default partyFormReducer;
