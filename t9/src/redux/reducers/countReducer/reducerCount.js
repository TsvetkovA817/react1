const initialState = {
    count: 3
}

export const reducerCount = (state = initialState, action) => {
    switch (action.type) {
        case 'plus':
            return {
                ...state,
                count: state.count + 1
            }
        case 'minus':
            return {
                ...state,
                count: state.count - 1
            }
        case 'reset':
            return {
                ...state,
                count: state.count = 0
            }

        default:
            return state;
    }
}