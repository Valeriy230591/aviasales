import React from "react";
import style from "./Card.module.scss";

const Card = () => {
  return (
    <div className={style.card__wrapper}>
      <div className={style.card__header}>
        <h2 className={style.card__header_price}>12222</h2>
        <img src={"//pics.avs.io/99/36/AA.png"}></img>
      </div>
    </div>
  );
};

export default Card;
