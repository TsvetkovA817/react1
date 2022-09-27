import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducerCount } from './reducers/countReducer/reducerCount';
import { reducerMess } from './reducers/messagesReducer/reducer';
import { chatsReducer } from './reducers/chatsReducer/chatsReducer';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage


const delayActionMw = store => next => action => {
    //console.log(store.getState());
    console.log(action);
    //console.dir(action.meta.delay);
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }
    const idTimeOut = setTimeout(() => { console.log('timeout2000'); next(action) }, action.meta.delay);

    return function cancel() {
        clearTimeout(idTimeOut);
    };
}
const composeEnh = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    chats: chatsReducer,
    messages: reducerMess,
    count: reducerCount
})

const persistedReducer = persistReducer(persistConfig, reducer);

const logger = createLogger();

export const store2 = createStore(persistedReducer, composeEnh(applyMiddleware(logger, delayActionMw)));
export const persistor = persistStore(store2);