
import { createStore } from 'redux';
import gameReducer from './game-reducer';

const initialSate = {
  players: [],
  party: [],
  gameBet: {game: 10, wheel: 5, cross: 10}
}

const store = createStore(gameReducer, initialSate);

export default store;
