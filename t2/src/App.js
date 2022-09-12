import './App.css';
import Mess from './Message';

import { useEffect, useState } from 'react';

let varInApp = 4;

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

  const lst = messageList.map((el, idx) => {
    return (
      <div key={el.id}>
        {el.autor && <h3>{el.autor} </h3>}
        {el.msg && <p>Сообщение:</p>}
        {el.msg && <p>{el.msg}</p>}
      </div>

    );
  });

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
  }, [messageList]);

  //На экран
  return (
    <div className="App">

      <header className="App-header">
        <h1>Lorem ipsum dolor sit amet 1</h1>
      </header>

      <form onSubmit={btnSend}>
        <input type="text" name="autor" />
        <input type="text" name="mess" />
        <button type="submit">Отправить</button>
      </form>

      {lst}

      <p>{msgSended}</p>

      <Mess varInApp={msgReceived} />

    </div>
  );
}

export default App;
