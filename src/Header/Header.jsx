import React from "react";
import style from "./Header.module.scss";
import logo from "../images/Logo.svg";
const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.header__logo} src={logo}></img>
    </header>
  );
};

export default Header;
