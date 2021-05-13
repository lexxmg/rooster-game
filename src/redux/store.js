
import { createStore } from 'redux';
import gameReducer from './game-reducer';

const initialSate = {
  players: [],
  party: []
}

const store = createStore(gameReducer, initialSate);

export default store;
