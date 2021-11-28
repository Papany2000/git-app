import {combineReducers, createStore} from 'redux';
import containerReducer  from './container-reducer';
import dialogsReducer from  './dialogs-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
    container: containerReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;