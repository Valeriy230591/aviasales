import React from "react";
import style from "./Card.module.scss";

const Card = ({ price, id, carrier }) => {
  return (
    <li className={style.tikets__item}>
      {" "}
      <div className={style.card__wrapper}>
        <div className={style.card__header}>
          <h2 className={style.card__header_price}>12220</h2>
          <img src={`//pics.avs.io/99/36/AA.png`}></img>
        </div>
      </div>
    </li>
  );
};

export default Card;
