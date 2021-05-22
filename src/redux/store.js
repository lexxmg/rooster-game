
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from './game-reducer';
import playersReducer from './players-reducer';


const reducers = combineReducers({
  game: gameReducer,
  players: playersReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
