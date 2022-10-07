import * as React from 'react';

//import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { userSelector } from './redux/reducers/userReducer/userSelector';

import { Link, NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import Login from './pages/LoginPage';
import SignUp from './pages/SignUpPage';
import Logout from './pages/LogoutPage';
import Contacts from './pages/Contacts';
import NewContact from './pages/NewContact';
import ViewContact from './pages/ViewContact';
import ProtectedRoutes from './components/ProtectedRoutes';
import Layout from './components/Layout';

import { getAuth } from "firebase/auth";


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

  let currUser = useSelector(userSelector);
  console.log(`currUser = ${currUser?.email}`);

  return (
    <div className="App">

      <header className="App-header">
        <h1>Lorem ipsum dolor sit amet 1</h1>
      </header>

      <ThemeProvider theme={theme}>
        <div className="main">

          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route path={'/posts/:id'} element={<Post />} />
              <Route path={'/posts'} element={<Posts />} />
              {currUser && <Route path={'/contacts'} element={<Contacts />} />}
              {currUser && <Route path={'/profile'}
                element={
                  <ProtectedRoutes><Profile /></ProtectedRoutes>
                } />
              }
              {currUser && <Route path={'/chats/:id'} element={<Chats />} />}
              <Route path={'/'} element={<Home />} />
              <Route path={'/about'} element={<AboutPage />} />
              <Route path={'*'} element={<NoPage />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/logout'} element={<Logout />} />
              <Route path={'/signup'} element={<SignUp />} />
              <Route path={'/home'} element={<Home />} />
              {currUser && <Route path={'/newcontact'} element={<NewContact />} />}
              {currUser && <Route path={'/editcontact/:id'} element={<NewContact />} />}
              {currUser && <Route path={'/viewcontact/:id'} element={<ViewContact />} />}
            </Route>
          </Routes>

        </div>
      </ThemeProvider>

      <footer className="App-footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repudiandae?</p>
        <div className="nav__footer">
          <Link to={'/about'}>О нас</Link>
          <Link to={'/'}>Главная</Link>
          {currUser && <Link to={'/chats/0'}>Чаты</Link>}
          <Link to={'/posts'}>Статьи</Link>
          {currUser && <Link to={'/profile'}>Профиль</Link>}
          {currUser && <Link to={'/contacts'}>Контакты</Link>}
          {(!currUser) ? <Link to={'/signup'}>Регистрация</Link> : ''}
          {(!currUser) ? <Link to={'/login'}>Вход</Link> : ''}
          {currUser && <Link to={'/logout'}>Выход</Link>}
        </div>
        <p>Контакты:</p>
        <p>тел. 8-888-888-888</p>
        <p>2022</p>
      </footer>
    </div>
  );
}

export default App;
