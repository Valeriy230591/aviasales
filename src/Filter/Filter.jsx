import React from "react";
import style from "./Filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { activeFilter } from "../store/filterSlice";

const Filter = () => {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

  return (
    <div className={style.filter}>
      <div>
        <h1 className={style.filter__header}>Количество пересадок</h1>
      </div>
      <div className={style.filter__menu}>
        {filters.map((filter) => {
          return (
            <div className={style.filter__checkbox} key={filter.name}>
              <input
                onClick={() => dispatch(activeFilter(filter.id))}
                className={style.custom__checkbox}
                type="checkbox"
                checked={filter.active}
              ></input>
              <label htmlFor={filter.id}>{filter.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
