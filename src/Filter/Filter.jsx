import React from "react";
import style from "./Filter.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../store/filterSlice";
const Filter = () => {
  const filterArr = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  return (
    <div className={style.filter}>
      <div>
        <h1 className={style.filter__header}>Количество пересадок</h1>
      </div>
      <div className={style.filter__menu}>
        {filterArr.map((item) => {
          return (
            <div className={style.filter__checkbox} key={item.id}>
              <input
                id={item.id}
                onChange={() => dispatch(setActiveFilter(item.name))}
                className={style.custom__checkbox}
                type="checkbox"
                checked={item.completed}
              ></input>
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
