import './users.css';

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkLogout } from "../redux/reducers/userReducer/reducerUser";

import Button from '@mui/material/Button';

import { userSelector } from '../redux/reducers/userReducer/userSelector';

const Logout = () => {

    const dispatch = useDispatch();
    const navi = useNavigate();

    const currUser = useSelector(userSelector);

    //console.log(`currUser = ${currUser.email}`);

    const btnLogout = (e) => {
        e.preventDefault();
        if (!currUser) {
            return;
        }
        dispatch(thunkLogout());
        navi('/home');
    }


    return (
        <div>
            <h1>Выход</h1>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>
            <div className='register__form'>
                <form onSubmit={btnLogout}>
                    <Button type="submit" sx={{ margin: '20px 0px 10px 0' }} variant="contained">Выход</Button>
                </form>
            </div>
        </div>
    );
}

export default Logout;