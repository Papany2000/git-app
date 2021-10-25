import {combineReducers, createStore} from 'redux';
import containerReducer  from './container-reducer';
import dialogsReducer from  './dialogs-reducer';
let reducers = combineReducers({
    container: containerReducer,
    dialogs: dialogsReducer
});

let store = createStore(reducers);


export default store;