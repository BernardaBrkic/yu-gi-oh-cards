import React from "react";
import Card from "./Card";
import classes from "./CardsList.module.css";

const CardsList = (props) => {
  return (
    <ul className={classes["cards-list"]}>
      {props.cards.map((card) => (
        <Card
          i={card.i}
          key={card.key}
          id={card.id}
          name={card.name}
          type={card.type}
          description={card.description}
        />
      ))}
    </ul>
  );
};

export default CardsList;
