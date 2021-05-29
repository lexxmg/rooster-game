
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import playersReducer,
  { createNewPlayer, setCashPlayer, deletePlayer,
    setOfBribes, resetPlayers, setGainAndLosing, deletePlayers,
    setJackChecked
  } from './players-reducer';
//console.log(createNewPlayer);
// const middlewares = [thunk] // add your middlewares like `redux-thunk`
// const mockStore = configureStore(middlewares)

const initialState = {
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

it('set jack checked', () => {
  const action = setJackChecked(2, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

 expect(newState.players[1].jackChecked).toBe(true);
});

it('delete player', () => {
  const action = deletePlayer(2);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players.length).toBe(2);
});

it('delete players', () => {
  const action = deletePlayers();
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players.length).toBe(0);
  expect(newState.playerCount).toBe(0);
  expect(newState.someWin).toBe(false);
});

it('player count decriment', () => {
  const action = deletePlayer(2);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.playerCount).toBe(2);
});

it('set gain and losing', () => {
  const action = setGainAndLosing(2, 50, 0);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(0);
  expect(newState.players[1].isTouched).toBe(false);
  expect(newState.players[1].cash).toBe(100);
  expect(newState.players[1].score).toBe(15);
  expect(newState.players[1].gain).toBe(50);
  expect(newState.players[1].losing).toBe(0);
  expect(newState.players[1].isJack).toBe(false);
  expect(newState.players[1].cross).toBe(false);
  expect(newState.players[1].wheel).toBe(false);
  expect(newState.players[1].crossCount).toBe(0);
  expect(newState.players[1].wheelCount).toBe(0);
  expect(newState.players[1].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(5);
  expect(newState.players[1].canTaceBribs).toBe(5);
  expect(newState.players[2].canTaceBribs).toBe(5);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 3 is jack', () => {
  const action = setOfBribes(2, 3, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(3);
  expect(newState.players[1].isTouched).toBe(true);
  expect(newState.players[1].score).toBe(7);
  expect(newState.players[1].isJack).toBe(true);
  expect(newState.players[1].cross).toBe(false);
  expect(newState.players[1].wheel).toBe(false);
  expect(newState.players[1].crossCount).toBe(0);
  expect(newState.players[1].wheelCount).toBe(0);
  expect(newState.players[1].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(2);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(2);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 0 is jack score = 15', () => {
  const action = setOfBribes(2, 0, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(0);
  expect(newState.players[1].isTouched).toBe(true);
  expect(newState.players[1].score).toBe(15);
  expect(newState.players[1].isJack).toBe(true);
  expect(newState.players[1].cross).toBe(true);
  expect(newState.players[1].wheel).toBe(false);
  expect(newState.players[1].crossCount).toBe(1);
  expect(newState.players[1].wheelCount).toBe(0);
  expect(newState.players[1].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(5);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(5);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 0 is jack score = 10', () => {
  const action = setOfBribes(3, 0, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[2].numberOfBribes).toBe(0);
  expect(newState.players[2].isTouched).toBe(true);
  expect(newState.players[2].score).toBe(10);
  expect(newState.players[2].isJack).toBe(true);
  expect(newState.players[2].cross).toBe(true);
  expect(newState.players[2].wheel).toBe(false);
  expect(newState.players[2].crossCount).toBe(1);
  expect(newState.players[2].wheelCount).toBe(0);
  expect(newState.players[2].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(5);
  expect(newState.players[1].canTaceBribs).toBe(5);
  expect(newState.players[2].canTaceBribs).toBe(0);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 5 is jack score = 10', () => {
  const action = setOfBribes(3, 5, true);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[2].numberOfBribes).toBe(5);
  expect(newState.players[2].isTouched).toBe(true);
  expect(newState.players[2].score).toBe(0);
  expect(newState.players[2].isJack).toBe(true);
  expect(newState.players[2].cross).toBe(false);
  expect(newState.players[2].wheel).toBe(false);
  expect(newState.players[2].crossCount).toBe(0);
  expect(newState.players[2].wheelCount).toBe(0);
  expect(newState.players[2].isWin).toBe(true);

  expect(newState.players[0].canTaceBribs).toBe(0);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(0);

  expect(newState.someWin).toBe(true);
});

it('set of bribes 3', () => {
  const action = setOfBribes(2, 3, false);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(3);
  expect(newState.players[1].isTouched).toBe(true);
  expect(newState.players[1].score).toBe(12);
  expect(newState.players[1].isJack).toBe(false);
  expect(newState.players[1].cross).toBe(false);
  expect(newState.players[1].wheel).toBe(false);
  expect(newState.players[1].crossCount).toBe(0);
  expect(newState.players[1].wheelCount).toBe(0);
  expect(newState.players[1].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(2);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(2);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 5 score = 5', () => {
  const action = setOfBribes(1, 5, false);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[0].numberOfBribes).toBe(5);
  expect(newState.players[0].isTouched).toBe(true);
  expect(newState.players[0].score).toBe(0);
  expect(newState.players[0].isJack).toBe(false);
  expect(newState.players[0].cross).toBe(false);
  expect(newState.players[0].wheel).toBe(false);
  expect(newState.players[0].crossCount).toBe(0);
  expect(newState.players[0].wheelCount).toBe(0);
  expect(newState.players[0].isWin).toBe(true);

  expect(newState.players[0].canTaceBribs).toBe(0);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(0);

  expect(newState.someWin).toBe(true);
});

it('set of bribes 0 score = 5', () => {
  const action = setOfBribes(1, 0, false);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[0].numberOfBribes).toBe(0);
  expect(newState.players[0].isTouched).toBe(true);
  expect(newState.players[0].score).toBe(10);
  expect(newState.players[0].isJack).toBe(false);
  expect(newState.players[0].cross).toBe(false);
  expect(newState.players[0].wheel).toBe(true);
  expect(newState.players[0].crossCount).toBe(0);
  expect(newState.players[0].wheelCount).toBe(1);
  expect(newState.players[0].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(0);
  expect(newState.players[1].canTaceBribs).toBe(5);
  expect(newState.players[2].canTaceBribs).toBe(5);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 0 score = 15', () => {
  const action = setOfBribes(2, 0, false);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(0);
  expect(newState.players[1].isTouched).toBe(true);
  expect(newState.players[1].score).toBe(15);
  expect(newState.players[1].isJack).toBe(false);
  expect(newState.players[1].cross).toBe(false);
  expect(newState.players[1].wheel).toBe(true);
  expect(newState.players[1].crossCount).toBe(0);
  expect(newState.players[1].wheelCount).toBe(1);
  expect(newState.players[1].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(5);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(5);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 2 score = 15', () => {
  const action = setOfBribes(2, 2, false);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[1].numberOfBribes).toBe(2);
  expect(newState.players[1].isTouched).toBe(true);
  expect(newState.players[1].score).toBe(13);
  expect(newState.players[1].isJack).toBe(false);
  expect(newState.players[1].cross).toBe(false);
  expect(newState.players[1].wheel).toBe(false);
  expect(newState.players[1].crossCount).toBe(0);
  expect(newState.players[1].wheelCount).toBe(0);
  expect(newState.players[1].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(3);
  expect(newState.players[1].canTaceBribs).toBe(0);
  expect(newState.players[2].canTaceBribs).toBe(3);

  expect(newState.someWin).toBe(false);
});

it('set of bribes 0 score = 10 should rise', () => {
  const action = setOfBribes(3, 0, false);
  const newState = playersReducer(initialState, action);
  //console.log(newState);

  expect(newState.players[2].numberOfBribes).toBe(0);
  expect(newState.players[2].isTouched).toBe(true);
  expect(newState.players[2].score).toBe(15);
  expect(newState.players[2].isJack).toBe(false);
  expect(newState.players[2].cross).toBe(false);
  expect(newState.players[2].wheel).toBe(true);
  expect(newState.players[2].crossCount).toBe(0);
  expect(newState.players[2].wheelCount).toBe(1);
  expect(newState.players[2].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(5);
  expect(newState.players[1].canTaceBribs).toBe(5);
  expect(newState.players[2].canTaceBribs).toBe(0);

  expect(newState.someWin).toBe(false);
});

it('resset players', () => {
  const action = resetPlayers();
  const newState = playersReducer(initialState, action);
  //console.log(newState);
  expect(newState.players[2].id).toBe(3);
  expect(newState.players[2].name).toBe('lexx');
  expect(newState.players[2].cash).toBe(100);
  expect(newState.players[2].numberOfBribes).toBe(0);
  expect(newState.players[2].isTouched).toBe(false);
  expect(newState.players[2].score).toBe(15);
  expect(newState.players[2].isJack).toBe(false);
  expect(newState.players[2].cross).toBe(false);
  expect(newState.players[2].wheel).toBe(false);
  expect(newState.players[2].crossCount).toBe(0);
  expect(newState.players[2].wheelCount).toBe(0);
  expect(newState.players[2].isWin).toBe(false);

  expect(newState.players[0].canTaceBribs).toBe(5);
  expect(newState.players[1].canTaceBribs).toBe(5);
  expect(newState.players[2].canTaceBribs).toBe(5);

  expect(newState.someWin).toBe(false);
});



// it('set is bribes to jack true thunk', () => {
//   const store = mockStore(initialState);
//
//   store.dispatch( setOfBribesCalc(2, 3, true) );
//
//   //console.log(store.getState());
//   //console.log(store.getActions());
//
//   expect(store.getActions()[0].isJack).toBe(true);
//   expect(store.getActions()[1].numberOfBribes).toBe(8);
//   expect(store.getActions()[2].score).toBe(7); //15 - 8
// });
//
// it('set is bribes to jack false thunk', () => {
//   const store = mockStore(initialState);
//
//   store.dispatch( setOfBribesCalc(2, 3, false) );
//
//   //console.log(store.getState());
//   //console.log(store.getActions());
//   expect(store.getActions()[0].isJack).toBe(false);
//   expect(store.getActions()[1].numberOfBribes).toBe(3);
// });
//
// it('set is bribes to jack true and 0 bribes thunk', () => {
//   const store = mockStore(initialState);
//
//   store.dispatch( setOfBribesCalc(2, 0, true) );
//
//   console.log(store.getState());
//   console.log(store.getActions());
//
//   expect(store.getActions()[0].isJack).toBe(true);
//   expect(store.getActions()[1].numberOfBribes).toBe(0);
//   expect(store.getActions()[2].cross).toBe(true);
//   expect(store.getActions()[2].wheel).toBe(false);
// });
