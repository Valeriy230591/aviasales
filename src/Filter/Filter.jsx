import React from "react";
import style from "./Filter.module.scss";
import { handleChangeFilters } from "../store/filterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Filter = () => {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const handleCompletedItem = (name) => {
    dispatch(handleChangeFilters(name));
  };
  return (
    <div className={style.filter}>
      <div>
        <h1 className={style.filter__header}>Количество пересадок</h1>
      </div>
      <div className={style.filter__menu}>
        {filters.map((item) => (
          <div className={style.filter__checkbox} key={item.id}>
            <input
              id={item.id}
              onChange={() => handleCompletedItem(item.name)}
              className={style.custom__checkbox}
              type="checkbox"
              checked={item.completed}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
