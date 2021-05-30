
import partyFormReducer,
  { createPartyForm, partyFormReset,
    setJackChecked, setOfBribesFormParty
  } from './partyForm-reducer';

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

const testDataFull = {
  partyForm: [
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
  jackCount: 0
}

const initialState = {
  partyForm: [],
  jackCount: 0
};

let newStateFull;

it('create party form', () => {
  const action = createPartyForm(testData.players);
  //const newState = partyFormReducer(initialState, action);
  newStateFull = partyFormReducer(initialState, action);
  //console.log(newState);

  expect(newStateFull.partyForm.length).toBe(3);
  expect(newStateFull.jackCount).toBe(0);
});

it('set jack checked', () => {
  const action = setJackChecked(2, true);
  const newState = partyFormReducer(newStateFull, action);
  //console.log(newState);

 expect(newState.partyForm[1].jackChecked).toBe(true);
});

it('set jack checked true count', () => {
  const action = setJackChecked(2, true);
  const newState = partyFormReducer(testDataFull, action);
  //console.log(newState);

 expect(newState.jackCount).toBe(1);
});

it('set bribes', () => {
  const action = setOfBribesFormParty(2, 3);
  const newState = partyFormReducer(testDataFull, action);
  //console.log(newState);

 expect(newState.partyForm[0].numberOfBribes).toBe(0);
 expect(newState.partyForm[1].numberOfBribes).toBe(3);
 expect(newState.partyForm[2].numberOfBribes).toBe(0);
});

it('set jack checked false count', () => {
  const action = setJackChecked(2, false);
  const newState = partyFormReducer(testDataFull, action);
  //console.log(newState);

 expect(newState.jackCount).toBe(0);
});

it('form party reset', () => {
  const action = partyFormReset();
  const newState = partyFormReducer(testDataFull, action);
  //console.log(newState);

 expect(newState.partyForm[0].jackChecked).toBe(false);
 expect(newState.partyForm[0].numberOfBribes).toBe(0);
 expect(newState.partyForm[0].canTaceBribs).toBe(5);
 expect(newState.partyForm[0].isJack).toBe(false);

 expect(newState.partyForm[1].jackChecked).toBe(false);
 expect(newState.partyForm[1].numberOfBribes).toBe(0);
 expect(newState.partyForm[1].canTaceBribs).toBe(5);
 expect(newState.partyForm[1].isJack).toBe(false);

 expect(newState.partyForm[2].jackChecked).toBe(false);
 expect(newState.partyForm[2].numberOfBribes).toBe(0);
 expect(newState.partyForm[2].canTaceBribs).toBe(5);
 expect(newState.partyForm[2].isJack).toBe(false);

 expect(newState.jackCount).toBe(0);
});
