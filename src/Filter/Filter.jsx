import React from "react";
import style from "./Filter.module.scss";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { activeFilter } from "../store/filterSlice";

const Filter = () => {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();

=======
import { handleChangeFilters } from "../store/filterSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Filter = () => {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const handleCompletedItem = (name) => {
    dispatch(handleChangeFilters(name));
  };
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
  return (
    <div className={style.filter}>
      <div>
        <h1 className={style.filter__header}>Количество пересадок</h1>
      </div>
      <div className={style.filter__menu}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 7dc6139fa486c08ece341ada3484755e98a7bcb8
      </div>
    </div>
  );
};

export default Filter;
