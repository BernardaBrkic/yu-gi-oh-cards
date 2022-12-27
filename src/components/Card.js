import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <li className={classes.card}>
      <h2>{props.name}</h2>
      <h4>{props.type}</h4>
      <p>{props.description}</p>
    </li>
  );
};

export default Card;
