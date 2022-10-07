import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dbFire as firebaseDB } from '../services/firebase';
import "./ViewContact.css";

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from '../redux/reducers/userReducer/userSelector';

import { getAuth } from "firebase/auth";

const Profile = () => {


    const currUser = useSelector(userSelector);
    console.log(`currUser = ${currUser?.email}`);
    const userEmail = currUser?.email;

    const auth = getAuth();
    const user = auth.currentUser;

    const displayName = user && user?.displayName;
    const email = user && user?.email;
    const tel = user && user?.phoneNumber;
    const dtReg = user && user?.metadata?.creationTime;


    return (
        <div>
            <h1>Профиль</h1>
            <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>
            <div style={{ marginTop: "50px" }}>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <p>Просмотр данных</p>
                    </div>
                    <div className={"container"}>
                        <br />
                        <strong>Имя:</strong>
                        <span>{displayName}</span>
                        <br />
                        <br />
                        <strong>Email:</strong>
                        <span>{email}</span>
                        <br />
                        <br />
                        <strong>Тел:</strong>
                        <span>{tel}</span>
                        <br />
                        <br />
                        <strong>ДтРег:</strong>
                        <span>{dtReg}</span>
                        <div style={{ marginTop: "30px" }}>
                            <Link to={"/home"}>
                                <button className={"bttn btn-edit"}>На главную</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;