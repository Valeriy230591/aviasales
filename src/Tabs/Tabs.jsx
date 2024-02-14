import React from "react";
import style from "./Tabs.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../store/tabsSlice";
const Tabs = () => {
  const tabs = useSelector((state) => state.tabs.tabs);
  const dispatch = useDispatch();
  return (
    <div className={style.tikets__buttons}>
      {tabs.map((tab) => {
        return (
          <button
            active={tab.active.toString()}
            onClick={() => dispatch(setActiveTab(tab.name))}
            key={tab.id}
            className={style.tikets__button}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
