import * as React from 'react';
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

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import './App.css';
import Mess from './Message';

import { useEffect, useState } from 'react';

let varInApp = 4;

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',  //green
    },
  },
});


function App(props) {

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

  const [chatList] = useState([
    { id: 1, name: 'чат1' },
    { id: 2, name: 'чат2' },
    { id: 3, name: 'чат3' },
  ]);


  //Кнопка submit отправить
  const btnSend = (event) => {
    event.preventDefault();
    const autor = event.target.autor.value;
    const mess = event.target.mess.value;
    const newId = getNewId();
    setMessageList(prevState => [...prevState, { id: newId, autor, msg: mess }]);
    setMsgSended(`Сообщение автора ${autor} отправлено`);
    setMsgReceived('');   // Сброс сообщения о приемке            空的
    varInApp = '';                                              //空的
    inputMess.current.value = '';
  }

  //Новый ИД
  const getNewId = () => {
    const ar = [...messageList];                                //一个数组的复制
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

  //На экран
  return (
    <div className="App">

      <header className="App-header">
        <h1>Lorem ipsum dolor sit amet 1</h1>
      </header>

      <ThemeProvider theme={theme}>
        <div className="main">
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
                        <ListItemText primary={el.id && <div>{el.id} {el.name}</div>} secondary="Sep 14, 2022" />
                      </ListItemAvatar>
                    </ListItem>
                  </div>)
              })}
            </List>
          </div>

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
            <Mess varInApp={msgReceived} />
          </form>

          <div>
            <Typography variant="h4" gutterBottom> Сообщения </Typography>
            {lst}

          </div>

        </div>
      </ThemeProvider>


    </div>
  );
}

export default App;
