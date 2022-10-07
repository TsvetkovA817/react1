import './contacts.css';

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dbFire } from '../services/firebase';

import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';

import { userSelector } from '../redux/reducers/userReducer/userSelector';



const Contacts = () => {

    const dispatch = useDispatch();
    const navi = useNavigate();

    const currUser = useSelector(userSelector);

    //console.log(`currUser = ${currUser.email}`);

    const btnOut = (e) => {
        e.preventDefault();
        navi('/home');
    }

    const [contacts, setContacts] = useState({});

    useEffect(() => {
        dbFire.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setContacts({ ...snapshot.val() });
            } else {
                setContacts({});
            }
        });
        return () => {
            setContacts({});
        };
    }, []);

    const btnDelete = (id) => {
        if (id) {
            if (window.confirm("Удалить контакт?")) {

                dbFire.child(`contacts/${id}`).remove((err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Контакт удален успешно");
                    }
                });
            }
        }
        else {
            toast.error('ИД не указан');
        }
    };

    return (
        <div>
            <h1>Контакты</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>
            <Link to={'/newcontact'}><button className={"bttn btn-add"}>Новый контакт</button></Link>
            <ToastContainer />
            <table className={"styled-table"}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Email</th>
                        <th style={{ textAlign: "center" }}>Tel</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(contacts).map((id, index) => {
                        return (
                            <tr key={id}>
                                <th scope={"row"}>{index + 1}</th>
                                <td>{contacts[id].name}</td>
                                <td>{contacts[id].email}</td>
                                <td>{contacts[id].tel}</td>
                                <td>
                                    <Link to={`/editcontact/${id}`}>
                                        <button className={"bttn btn-edit"}>Edit</button>
                                    </Link>
                                    <button
                                        className={"bttn btn-delete"}
                                        onClick={() => btnDelete(id)}
                                    >
                                        Delete
                                    </button>
                                    <Link to={`/viewcontact/${id}`}>
                                        <button className={"bttn btn-view"}>View</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='contacts__form'>
                <form onSubmit={btnOut}>
                    <Button type="submit" sx={{ margin: '20px 0px 10px 0' }} variant="contained">На главную</Button>
                </form>
            </div>
        </div >
    );
}

export default Contacts;