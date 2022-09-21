import './Chats.css';

import React from "react";
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/Button';
import Input from '@mui/material/Input';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

import Mess from '../Message';

let varInChats = '';

const Chats = () => {

    /*
    const testMessageList = [
        { id: 1, autor: 'Автор1', msg: 'Lorem ipsum dolor sit amet 1' },
        { id: 3, autor: 'Автор2', msg: 'Lorem ipsum dolor sit amet 2' },
        { id: 2, autor: 'Автор3', msg: 'Lorem ipsum dolor sit amet 3' },
      ];
      const initialMessageList = testMessageList;
    */

    const initialMessageList = [];                                 //空的

    const [messageList, setMessageList] = useState(initialMessageList);
    const [msgSended, setMsgSended] = useState('');   //сообщение об отправке
    const [msgReceived, setMsgReceived] = useState('');   //сообщение о приеме
    const [message, setMessage] = useState('');
    const [autor, setAutor] = useState('');

    const inputMess = React.useRef(null);

    const lst = messageList.map((el, idx) => {
        return (
            <div key={el.id}>
                {el.autor && <h3>{el.autor} </h3>}
                {el.msg && <p>Сообщение:</p>}
                {el.msg && <p>{el.msg}</p>}
            </div>

        );
    });

    const [chatList, setChatList] = useState([
        { id: 1, name: 'чатA' },
        { id: 2, name: 'чатB' },
        { id: 3, name: 'чатC' },
    ]);

    const [newChat, setNewChat] = useState('');

    const btnDelChat = (id) => {

        const filtered = chatList.filter((item) => item.id !== +id);
        setChatList(filtered);
    }

    const btnAddChat = () => {
        //alert(newChat);
        const newId = getNewId(chatList);
        const newEl = {
            id: newId,
            name: newChat
        }
        setChatList(prevState => [...prevState, newEl]);
    }

    //Кнопка submit отправить
    const btnSend = (event) => {
        event.preventDefault();
        const autor = event.target.autor.value;
        const mess = event.target.mess.value;
        const newId = getNewId(messageList);
        console.log(newId);
        setMessageList(prevState => [...prevState, { id: newId, autor, msg: mess }]);
        setMsgSended(`Сообщение автора ${autor} отправлено`);
        setMsgReceived('');   // Сброс сообщения о приемке            空的
        varInChats = '';                                              //空的
        inputMess.current.value = '';
    }

    //Новый ИД
    const getNewId = (arr) => {
        const ar = [...arr];
        let newId = 1;
        if (ar.length) {
            ar.sort((a, b) => parseInt(a.id) - parseInt(b.id));       //排序
            newId = parseInt(ar[ar.length - 1].id) + 1;
        }
        return newId;
    }

    //Через 2 сек выдать сообщение о приеме
    const bot = () => {
        if (messageList.length) {
            const i = messageList.length - 1;                         //最后一个元素
            const msg2 = `Сообщение автора ${messageList[i].autor} принято ID ${messageList[i].id}`;
            console.log(msg2);
            setMsgReceived(msg2);
        }
    }

    useEffect(() => {
        setTimeout(() => { bot() }, 2000);
        focusToInputField(inputMess.current);
    }, [messageList]);

    const handleChangeMess = (event) => {
        setMessage(event.target.value);
    };

    function focusToInputField(inp) {
        if (inp) {
            inp.focus();
        }
    }

    return (
        <div className="chats">
            <h1>Список чатов</h1>
            <div className="chats_main">
                <div>
                    <Typography variant="h4" gutterBottom> Чаты </Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {chatList.map((el) => {
                            return (
                                <div key={el.id}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                            <ListItemText primary={el.id && <div>{el.id} {el.name} <button onClick={() => { btnDelChat(el.id) }}>x</button></div>} secondary={"Sep 14, 2022"} />
                                        </ListItemAvatar>
                                    </ListItem>
                                </div>)
                        })}
                    </List>
                    <input value={newChat} onChange={(e) => setNewChat(e.target.value)} />
                    <button onClick={() => { btnAddChat() }}>+</button>
                </div >
                <form onSubmit={btnSend}>
                    <div>
                        <Input sx={{ width: '160px' }} placeholder="Автор" name="autor" />
                    </div>
                    <div>
                        <Input sx={{ width: '160px' }} inputRef={inputMess} placeholder="Ваше сообщение" name="mess" multiline maxRows={9} />
                    </div>
                    <div>
                        <Button sx={{ margin: '20px 0px 10px 0' }} variant="contained" type="submit">Отправить</Button>
                    </div>
                    <p>{msgSended}</p>
                    <Mess varInChats={msgReceived} />
                </form>

                <div>
                    <Typography variant="h4" gutterBottom> Сообщения </Typography>
                    {lst}

                </div>
            </div>

        </div >
    );
};

export default Chats;
