import * as React from 'react';

//import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import './App.css';

//import { useEffect, useState } from 'react';

import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';


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

//роутинг
function App(props) {


  return (
    <div className="App">

      <header className="App-header">
        <h1>Lorem ipsum dolor sit amet 1</h1>
        <Link to={'/'}>Главная</Link>
        <Link to={'/chats/0'}>Чаты</Link>
        <Link to={'/posts'}>Статьи</Link>
        <Link to={'/profile'}>Профиль</Link>
      </header>

      <ThemeProvider theme={theme}>
        <div className="main">

          <Routes>
            <Route path={'/posts/:id'} element={<Post />} />
            <Route path={'/posts'} element={<Posts />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/chats/:id'} element={<Chats />} />
            <Route path={'/'} element={<Home />} />
            <Route path={'*'} element={<NoPage />} />
          </Routes>

        </div>
      </ThemeProvider>

      <footer className="App-footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repudiandae?</p>
        <p>тел. 8-888-888-888</p>
        <p>2022</p>
      </footer>
    </div>
  );
}

export default App;
