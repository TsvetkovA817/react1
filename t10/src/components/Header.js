import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";

import { userSelector } from "../redux/reducers/userReducer/userSelector";
import CustomLink from "./CustomLink";

const Header = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <hr />
      <div className="header">
        <Link to={"/"}>
          <p className="logo">Статьи Контакты Чаты</p>
        </Link>
        <div className="header-right">
          <CustomLink to={"/"}>Главная</CustomLink>
          <CustomLink to={"/about"}>О нас</CustomLink>
          {user && <CustomLink to={'/chats/0'}>Чаты</CustomLink>}
          <CustomLink to={'/posts'}>Статьи</CustomLink>
          {user && <CustomLink to={'/contacts'}>Контакты</CustomLink>}
          {user && <CustomLink to={'/profile'}>Профиль</CustomLink>}
          {(!user) ? <CustomLink to={'/signup'}>Регистрация</CustomLink> : ''}
          {(user) ? (<CustomLink to={"/logout"}>Выход</CustomLink>) :
            (<CustomLink to={"/login"}>Вход</CustomLink>)
          }
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
