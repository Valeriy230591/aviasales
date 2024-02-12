import React, { useState } from "react";
import style from "./TiketList.module.scss";
import Card from "../Card/Card";
import { handleChangeTabs } from "../store/tabsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const TiketList = () => {
  const tabs = useSelector((state) => state.tabs.tabs);
  const dispatch = useDispatch();
  const handleActiveTabs = (id) => {
    dispatch(handleChangeTabs(id));
  };

  return (
    <div className={style.tikets__wrapper}>
      <div className={style.tikets__buttons}>
        {tabs.map((item) => (
          <button
            onClick={() => handleActiveTabs(item.id)}
            id={item.id}
            className={`${style.tikets__button} ${
              item.active ? style.tikets__button_active : ""
            }`}
          >
            {item.label}
          </button>
        ))}
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
