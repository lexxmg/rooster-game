
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from './game-reducer';


const reducers = combineReducers({
  game: gameReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
