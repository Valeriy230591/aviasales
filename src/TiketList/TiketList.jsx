import React from "react";
import style from "./TiketList.module.scss";
import Card from "../Card/Card";
const TiketList = () => {
  return (
    <div className={style.tikets__wrapper}>
      <div className={style.tikets__buttons}>
        <button className={style.tikets__button}>Самый дешевый</button>
        <button className={style.tikets__button}>Самый быстрый</button>
        <button className={style.tikets__button}>Оптимальный</button>
      </div>
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
