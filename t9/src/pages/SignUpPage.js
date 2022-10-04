import './users.css';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkReg } from "../redux/reducers/userReducer/reducerUser";

import Button from '@mui/material/Button';

const SignUp = () => {

    const dispatch = useDispatch();
    const navi = useNavigate();

    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [userName, setUserName] = useState("");

    const btnRegister = (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            return;
        }
        dispatch(thunkReg(email, password1, userName));
        navi('/home');

    }


    return (
        <div>
            <h1>Регистрация</h1>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>
            <div className='register__form'>
                <form onSubmit={btnRegister}>
                    <div>Имя:<input value={userName} onChange={(e) => setUserName(e.target.value)} /></div>
                    <div>Емаил:<input value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    <div>Пароль:<input value={password1} onChange={(e) => setPassword1(e.target.value)} /></div>
                    <div>Пароль еще раз:<input value={password2} onChange={(e) => setPassword2(e.target.value)} /></div>
                    <Button type="submit" sx={{ margin: '20px 0px 10px 0' }} variant="contained">Регистрировать</Button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;