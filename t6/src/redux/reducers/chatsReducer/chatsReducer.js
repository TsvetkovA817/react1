import { ADD_CHAT, DEL_CHAT, REN_CHAT } from "../actionTypes"

const initialState = {
    chats: [
        { id: 1, name: 'чатA' },
        { id: 2, name: 'чатB' },
        { id: 3, name: 'чатC' },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEL_CHAT:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload.id)
            }
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        case REN_CHAT:
            const mIdxEl = state.chats.findIndex(el => el.id === action.payload.id);
            return {
                ...state,
                chats: [...state.chats.slice(0, mIdxEl), action.payload, ...state.chats.slice(mIdxEl + 1)]
            }
        default:
            return state
    }
}