import React from "react";
import style from "./TiketList.module.scss";
import Tabs from "../Tabs/Tabs";
import Card from "../Card/Card";
const TiketList = () => {
  return (
    <div className={style.tikets__wrapper}>
      <Tabs />
      <ul className={style.tikets__list}>
        <li className={style.tikets__item}>
          <Card />
        </li>
        <li className={style.tikets__item}>
          <Card />
        </li>
        <li className={style.tikets__item}>
          <Card />
        </li>
        <li className={style.tikets__item}>
          <Card />
        </li>
        <li className={style.tikets__item}>
          <Card />
        </li>
      </ul>
      <div className={style.tiket__showMore}>
        <button className={style.tiket__showMore_button}>
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
};

export default TiketList;
