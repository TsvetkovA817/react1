import { ADD_MESSAGE, ADD_MESSAGE_CHAT, DEL_MESSAGE, DEL_MESSAGE_CHAT } from "../actionTypes";

const testMessageList = {
    messages: [
        { id: 1, autor: 'Автор1', msg: 'Lorem ipsum dolor sit amet 1', chatId: 1 },
        { id: 3, autor: 'Автор2', msg: 'Lorem ipsum dolor sit amet 2', chatId: 2 },
        { id: 2, autor: 'Автор3', msg: 'Lorem ipsum dolor sit amet 3', chatId: 3 },
    ]
};

const initialState = testMessageList;

export const reducerMess = (state = initialState, action) => {
    switch (action.type) {
        case DEL_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload.id)
            }
        case DEL_MESSAGE_CHAT:
            return {
                ...state,
                messages: state.messages.filter((item) => item.chatId !== action.payload.id)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
}

const initialMessageList = testMessageList;