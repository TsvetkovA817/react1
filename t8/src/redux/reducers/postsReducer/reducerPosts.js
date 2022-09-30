import { errorPosts, loadingPosts } from "../actions";  //импорт констант действий для диспатча
import { GET_POSTS_FROM_SERVER, GET_POST } from "../actionTypes"

const initialState = {
    posts: [],
    loading: false,
    error: ''
}

export const reducerPosts = (state = initialState, action) => {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_POSTS_FROM_SERVER:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                posts: action.payload
            }
        case 'error':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case '3':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const getData = () => {
    return async (dispatch) => {
        //dispatch({ type: 'loading' }); //или
        dispatch(loadingPosts);
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await resp.json();
            dispatch({
                type: GET_POSTS_FROM_SERVER,
                payload: data
            })
        } catch (e) {
            console.log(`e=${e}`);
            //dispatch({ type: 'error', payload: e.toString() });  //или
            dispatch(errorPosts(e));
        }

    }
}