
import { createStore, combineReducers } from 'redux';
import gameReducer from './game-reducer';


const reducers = combineReducers({
  game: gameReducer
});

const store = createStore(reducers);

export default store;
