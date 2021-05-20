
import playersReducer, { createNewPlayer, setCashPlayer, deletePlayer } from './players-reducer';

const initialState = {
  players: [
    {name: 'lexx', cash: 100, id: 1},
    {name: 'lexx', cash: 100, id: 2},
    {name: 'lexx', cash: 100, id: 3}
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
