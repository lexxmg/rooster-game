
import partyFormReducer, { createPartyForm } from './partyForm-reducer';

const testData = {
  players: [
    { id: 1,
      name: 'lexx',
      cash: 100,
      gain: 0,
      losing: 0,
      isTouched: false,
      score: 5,
      numberOfBribes: 0,
      canTaceBribs: 5,
      isJack: false,
      jackChecked: false,
      cross: false,
      wheel: false,
      crossCount: 0,
      wheelCount: 0,
      isWin: false
    },
    { id: 2,
      name: 'lexx',
      cash: 100,
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
    },
    { id: 3,
      name: 'lexx',
      cash: 100,
      gain: 0,
      losing: 0,
      isTouched: false,
      score: 10,
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
  ],
  playerCount: 3,
  someWin: false
}

const initialState = {
  partyForm: []
};

it('create party form', () => {
  const action = createPartyForm(testData.players);
  const newState = partyFormReducer(initialState, action);
  //console.log(newState);

  expect(newState.partyForm.length).toBe(3);
});
