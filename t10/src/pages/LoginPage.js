import './users.css';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkLogin } from "../redux/reducers/userReducer/reducerUser";

import Button from '@mui/material/Button';


const Login = () => {

    const dispatch = useDispatch();
    const navi = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const btnLogin = (e) => {
        e.preventDefault();
        if (!password) {
            return;
        }
        dispatch(thunkLogin(email, password));
        navi('/home');

    }


    return (
        <div>
            <h1>Вход</h1>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>
            <div className='register__form'>
                <form onSubmit={btnLogin}>
                    <div>Емаил:<input value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    <div>Пароль:<input value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                    <Button type="submit" sx={{ margin: '20px 0px 10px 0' }} variant="contained">Вход</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;