
import betReducer, { setBet, deleteBet } from './bet-reducer';

const initialSate = {
  game: 0,
  wheel: 0,
  cross: 0
};

it('set bet', () => {
  const action = setBet(20, 5, 10);
  const newState = betReducer(initialSate, action);
  //console.log(newState);

  expect(newState.game).toBe(20);
  expect(newState.wheel).toBe(5);
  expect(newState.cross).toBe(10);
});

it('delete bet', () => {
  const action = deleteBet();
  const newState = betReducer(initialSate, action);
  //console.log(newState);

  expect(newState.game).toBe(0);
  expect(newState.wheel).toBe(0);
  expect(newState.cross).toBe(0);
});
