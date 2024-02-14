import React, { useState } from "react";
import style from "./TiketList.module.scss";
import Card from "../Card/Card";
<<<<<<< HEAD
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchId, fetchTickets } from "../store/actionServer";
import { activeTab } from "../store/tabsSlice";
const TiketList = () => {
  // const { id, tickets, isLoading, errorMessage } = useSelector(
  //   (state) => state.tickets
  // );
  const tabs = useSelector((state) => state.tabs.tabs);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSearchId());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchTickets(id));
  //   }
  // }, [dispatch, id]);
  return (
    <div className={style.tikets__wrapper}>
      <div className={style.tikets__buttons}>
        {tabs.map((tab) => {
          return (
            <button
              id={tab.name}
              active={tab.active.toString()}
              onClick={() => dispatch(activeTab(tab.name))}
              className={
                tab.active
                  ? `${style.tikets__button} ${style.active}`
                  : style.tikets__button
              }
            >
              {tab.label}
            </button>
          );
        })}
=======
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
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
      </div>
      <ul className={style.tikets__list}>
        <Card />
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
