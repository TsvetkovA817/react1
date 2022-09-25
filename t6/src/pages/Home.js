import './home.css'
import React from "react";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const count = useSelector(state => state.count.count)
    const disp = useDispatch();
    return (

        <div>
            <h1>Главная</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>

            <div className="count_block">
                <button onClick={() => disp({ type: 'minus' })}>-</button>
                <h3>{count}</h3>
                <button onClick={() => disp({ type: 'plus' })}>+</button>
                <button onClick={() => disp({ type: 'reset' })} className="btn_reset">x</button>
            </div>

        </div>
    );
};

export default Home;
