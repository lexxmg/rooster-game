
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from './game-reducer';
import playersReducer from './players-reducer';
import betReducer from './bet-reducer';
import partyFormReducer from './partyForm-reducer';


const reducers = combineReducers({
  game: gameReducer,
  players: playersReducer,
  bet: betReducer,
  partyForm: partyFormReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
