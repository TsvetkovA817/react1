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
  //роутинг
  return (
    <div className="App">

      <header className="App-header">
        <h1>Lorem ipsum dolor sit amet 1</h1>
        <Link to={'/'}>Главная</Link>
        <Link to={'/chats'}>Чаты</Link>
        <Link to={'/profile'}>Профиль</Link>
      </header>

      <ThemeProvider theme={theme}>
        <div className="main">

          <Routes>
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/chats'} element={<Chats />} />
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
