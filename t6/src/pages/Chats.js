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

import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { messageSelector } from '../redux/reducers/messagesReducer/messageSelector';
import { chatsSelector } from '../redux/reducers/chatsReducer/chatsSelector';
import { ADD_CHAT, ADD_MESSAGE, ADD_MESSAGE_CHAT, DEL_CHAT, DEL_MESSAGE, DEL_MESSAGE_CHAT, REN_CHAT } from '../redux/reducers/actionTypes';
import { useNavigate } from 'react-router-dom';

let varInChats = '';


const Chats = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const messageList = useSelector(messageSelector);

    const [msgSended, setMsgSended] = useState('');   //сообщение об отправке
    const [msgReceived, setMsgReceived] = useState('');   //сообщение о приеме
    const [message, setMessage] = useState('');
    const [autor, setAutor] = useState('');

    const inputMess = React.useRef(null);

    const { id } = useParams();
    const getChatId = Number(id);

    const chatMessages = messageList.filter((message) => {
        if (!getChatId) return 0;
        return message.chatId === getChatId;
    })

    //Удалить чат кнопка в списке чатов
    const btnDelChat = (id) => {
        //удаляем чат
        dispatch({ type: DEL_CHAT, payload: { id: id } })
        //удаляем сообщения чата
        dispatch({ type: DEL_MESSAGE_CHAT, payload: { id: id } })
        //если удаляется активный чат, переходим на предыдущий
        if (id == getChatId) {
            const newChatId = (getChatId > 1) ? getChatId - 1 : 0;
            navigate(`/chats/${newChatId}`);
        }
    }

    //Список сообщений
    const lst = chatMessages.map((el, idx) => {
        return (
            <div key={el.id}>
                {el.autor && <h3>{el.autor} </h3>}
                {el.msg && <p>Сообщение:</p>}
                {el.msg && <div><p>{el.msg}</p> <button onClick={() => { dispatch({ type: DEL_MESSAGE, payload: { id: el.id } }) }}>x</button></div>}
            </div >

        );
    });

    const chatList = useSelector(chatsSelector);
    console.log(chatList);

    const [newChat, setNewChat] = useState('');

    //Добавить чат
    const btnAddChat = () => {
        const newId = getNewId(chatList);
        const newEl = {
            id: newId,
            name: newChat
        }
        dispatch({ type: ADD_CHAT, payload: newEl });
        navigate(`/chats/${newId}`);
    }

    //Переименование текущего чата
    const btnRenChat = () => {
        const chatId = getChatId;
        const newEl = {
            id: chatId,
            name: newChat
        }
        dispatch({ type: REN_CHAT, payload: newEl });
    }

    //Кнопка submit отправить сообщение
    const btnSend = (event) => {
        event.preventDefault();
        const autor = event.target.autor.value;
        const mess = event.target.mess.value;
        const newId = getNewId(messageList);
        console.log(newId);
        const newMess = {
            id: newId,
            autor: autor,
            msg: mess,
            chatId: getChatId
        }
        dispatch({
            type: ADD_MESSAGE,
            payload: newMess
        });
        setMsgSended(`Сообщение автора ${autor} отправлено`);
        setMsgReceived('');   // Сброс сообщения о приемке            
        varInChats = '';
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
            const msg2 = `Сообщение автора ${messageList[i].autor} обработано ID ${messageList[i].id}`;
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
                                            <ListItemText primary={el.id && <div><Link to={`/chats/${el.id}`}>{el.id} {el.name}</Link> <button onClick={() => { btnDelChat(el.id) }}>x</button></div>} secondary={"Sep 14, 2022"} />
                                        </ListItemAvatar>
                                    </ListItem>
                                </div>)
                        })}
                    </List>

                    <div className="chats_control">
                        <input value={newChat} onChange={(e) => setNewChat(e.target.value)} />
                        <button onClick={() => { btnAddChat() }}>+</button>
                        <button onClick={() => { btnRenChat() }}>!</button>
                    </div>

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
