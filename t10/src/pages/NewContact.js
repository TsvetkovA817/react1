import './newcontact.css';

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { dbFire } from '../services/firebase';

import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '@mui/material/Button';

import { userSelector } from '../redux/reducers/userReducer/userSelector';


const initialContact = {
    name: "",
    email: "",
    tel: "",
    desc: "",
};


const NewContact = () => {

    const dispatch = useDispatch();
    const navi = useNavigate();

    const currUser = useSelector(userSelector);

    //console.log(`currUser = ${currUser.email}`);

    const btnOut = (e) => {
        e.preventDefault();
        navi('/home');
    }
    const btnContacts = (e) => {
        e.preventDefault();
        navi('/contacts');
    }

    const [contact, setContact] = useState(initialContact);
    const { name, email, tel, desc } = contact;
    const { id } = useParams();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const btnSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            toast.error("Не указано имя или емаил!");
        } else {
            if (!id) {
                dbFire.child("contacts").push(contact, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Контакт сохранен");
                    }
                });
            } else {
                dbFire.child(`contacts/${id}`).set(contact, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Contact updated successfully");
                    }
                });
            }
        }
    };

    //Редактирование контакта
    let mTitle = "Новый контакт";
    if (id) {
        mTitle = "Изменение контакта";
    }
    //Загрузка данных для редактирования
    useEffect(() => {
        if (id) {
            dbFire
                .child(`contacts/${id}`)
                .get()
                .then((data) => {
                    if (data.exists()) {
                        setContact({ ...data.val() });
                    } else {
                        setContact({});
                    }
                });
        }
    }, [id]);

    return (
        <div>
            <h1>{mTitle}</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet perspiciatis perferendis a omnis, blanditiis
                iure molestias ex porro officiis aliquid modi ipsum quaerat quibusdam, voluptatem, provident voluptas eligendi ad.</p>
            <ToastContainer />
            <div className='contacts__form'>
                <form onSubmit={btnSubmit} style={{
                    margin: "auto",
                    padding: 15,
                    maxWidth: 400,
                    alignContent: "center",
                }}>

                    <label htmlFor={"name"}>Name</label>
                    <input
                        id={"name"}
                        type={"text"}
                        placeholder={"Your name is.."}
                        name={"name"}
                        value={name || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor={"email"}>Email</label>
                    <input
                        placeholder={"Your email is..."}
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={email || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor={"tel"}>Телефон</label>
                    <input
                        id={"tel"}
                        type={"text"}
                        placeholder={"Your number is..."}
                        name={"tel"}
                        value={tel || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor={"desc"}>Подробно</label>
                    <input
                        id={"desc"}
                        type={"text"}
                        placeholder={"Description is..."}
                        name={"desc"}
                        value={desc || ""}
                        onChange={handleInputChange}
                    />

                    <Button type="submit" sx={{ margin: '20px 0px 10px 0' }} variant="contained">Сохранить</Button>
                    <Button onClick={btnContacts} sx={{ margin: '20px 0px 10px 30px' }} variant="contained">К списку контактов</Button>
                </form>
            </div>
        </div >
    );
}

export default NewContact;