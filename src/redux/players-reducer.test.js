
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import playersReducer,
  { createNewPlayer, setCashPlayer, deletePlayer,
    setOfBribes, setCrossWheel, setCrossCount,
    setWheelCount,
    setIsWin, setOfBribesCalc, setIsJack, setScore
  } from './players-reducer';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

const initialState = {
  players: [
    { id: 1,
      name: 'lexx',
      cash: 100,
      isTouched: false,
      score: 15,
      numberOfBribes: 0,
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
      isTouched: false,
      score: 15,
      numberOfBribes: 0,
      isJack: false,
      cross: false,
      wheel: false,
      crossCount: 2,
      wheelCount: 0,
      isWin: false
    },
    { id: 3,
      name: 'lexx',
      cash: 100,
      isTouched: false,
      score: 15,
      numberOfBribes: 0,
      isJack: false,
      cross: false,
      wheel: false,
      crossCount: 0,
      wheelCount: 0,
      isWin: false
    }
  ],
  playerCount: 3
}

it('add new players', () => {
  const action = createNewPlayer('lexx', 100);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players.length).toBe(4);
});

it('players count increment', () => {
  const action = createNewPlayer('lexx', 100);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.playerCount).toBe(4);
});

it('set cash player', () => {
  const action = setCashPlayer(2, 50);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].cash).toBe(50);
});

it('delete player', () => {
  const action = deletePlayer(2);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players.length).toBe(2);
});

it('player count decriment', () => {
  const action = deletePlayer(2);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.playerCount).toBe(2);
});

it('set of bribes', () => {
  const action = setOfBribes(2, 3);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(3);
});

it('set score', () => {
  const action = setScore(2, 10);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].score).toBe(10);
});

it('set of cross wheel', () => {
  const action = setCrossWheel(2, false, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].cross).toBe(false);
  expect(newState.players[1].wheel).toBe(true);
});

it('set of cross count', () => {
  const id = 3
  const action = setCrossCount(id, 1);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[id - 1].crossCount).toBe(1);
  expect(newState.players[id - 1].wheelCount).toBe(0);
});

it('set of wheel count', () => {
  const id = 3
  const action = setWheelCount(id, 1);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[id - 1].crossCount).toBe(0);
  expect(newState.players[id - 1].wheelCount).toBe(1);
});

it('set is win', () => {
  const action = setIsWin(2, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].isWin).toBe(true);
});

it('set is jack', () => {
  const action = setIsJack(2, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].isJack).toBe(true);
});

it('set is bribes to jack true thunk', () => {
  const store = mockStore(initialState);

  store.dispatch( setOfBribesCalc(2, 3, true) );

  //console.log(store.getState());
  //console.log(store.getActions());

  expect(store.getActions()[0].isJack).toBe(true);
  expect(store.getActions()[1].numberOfBribes).toBe(8);
  expect(store.getActions()[2].score).toBe(7); //15 - 8
});

it('set is bribes to jack false thunk', () => {
  const store = mockStore(initialState);

  store.dispatch( setOfBribesCalc(2, 3, false) );

  //console.log(store.getState());
  //console.log(store.getActions());
  expect(store.getActions()[0].isJack).toBe(false);
  expect(store.getActions()[1].numberOfBribes).toBe(3);
});

it('set is bribes to jack true and 0 bribes thunk', () => {
  const store = mockStore(initialState);

  store.dispatch( setOfBribesCalc(2, 0, true) );

  console.log(store.getState());
  console.log(store.getActions());

  expect(store.getActions()[0].isJack).toBe(true);
  expect(store.getActions()[1].numberOfBribes).toBe(0);
  expect(store.getActions()[2].cross).toBe(true);
  expect(store.getActions()[2].wheel).toBe(false);
});
