import React from "react";
import style from "./Filter.module.scss";
import { useState } from "react";
const Filter = () => {
  const [filters, setFilters] = useState([
    {
      id: 1,
      name: "Все",
      completed: false,
    },
    {
      id: 2,
      name: "Без пересадок",
      completed: false,
    },
    {
      id: 3,
      name: "1 пересадка",
      completed: false,
    },
    {
      id: 4,
      name: "2 пересадки",
      completed: false,
    },
    {
      id: 5,
      name: "3 пересадки",
      completed: false,
    },
  ]);
  const handleChange = (checkId) => {
    if (checkId === 1) {
      setFilters(
        filters.map((el) => {
          return {
            ...el,
            completed: !el.completed,
          };
        })
      );
    }
    setFilters(
      filters.map((el) => {
        if (el.id !== checkId) return el;
        return {
          ...el,
          completed: !el.completed,
        };
      })
    );
  };
  return (
    <div className={style.filter}>
      <div>
        <h1 className={style.filter__header}>Количество пересадок</h1>
      </div>
      <div className={style.filter__menu}>
        {filters.map((item) => {
          return (
            <div className={style.filter__checkbox} key={item.id}>
              <input
                id={item.id}
                onClick={() => handleChange(item.id)}
                className={style.custom__checkbox}
                type="checkbox"
                checked={filters.completed}
              ></input>
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
