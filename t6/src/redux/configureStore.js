import { combineReducers, createStore } from 'redux';
import { reducerCount } from './reducers/countReducer/reducerCount';
import { reducerMess } from './reducers/messagesReducer/reducer';
import { chatsReducer } from './reducers/chatsReducer/chatsReducer';


// export const store1 = createStore(reducerCount,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());

const reducer = combineReducers({
    chats: chatsReducer,
    messages: reducerMess,
    count: reducerCount
})

export const store2 = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());    