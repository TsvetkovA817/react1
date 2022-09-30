import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
//импорт thunk получения списка статей
import { getData } from "../redux/reducers/postsReducer/reducerPosts";

import { Link } from 'react-router-dom';

const Posts = () => {
    /*
    //1.Получение API json в компоненте через useEffect-fetch:

    const [postDt, setPostDt] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => resp.json())
            .then((data) => setPostDt(data))    //.then((data) => console.log(data))
            .catch((e) => { console.log(e) })
    }, []);
    */


    //2.Получение API json через state thunk:
    const postDt = useSelector(state => state.posts.posts);
    const loadingPosts = useSelector(state => state.posts.loading);
    const errorLoadingPosts = useSelector(state => state.posts.error);
    //console.log(`postDt= ${postDt}`);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);


    const btnRepeatGetPosts = () => {
        console.log('Повторная загрузка списка');
        dispatch(getData());
    }


    if (loadingPosts) {
        return (
            <div>
                <h4>Загрузка списка...</h4>
            </div>
        )
    }
    if (errorLoadingPosts) {
        return (
            <div>
                <h4>Ошибка загрузки списка</h4>
                <button onClick={btnRepeatGetPosts}>Повторить загрузку</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Статьи</h1>
            <h4>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</h4>

            {(postDt.length > 0) ? postDt.map((el) => {
                return (
                    <div key={el.id}>
                        <Link to={`/posts/${el.id}`}>{el.title}</Link>
                    </div>
                )
            }) : <h3>нет списка</h3>}

        </div>
    );
}

export default Posts;