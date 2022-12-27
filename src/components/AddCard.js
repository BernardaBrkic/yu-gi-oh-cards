import React, { useRef } from "react";
import classes from "./AddCard.module.css";

function AddCard(props) {
  let nameRef = useRef("");
  let typeRef = useRef("");
  let descriptionRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const card = {
      name: nameRef.current.value,
      type: typeRef.current.value,
      description: descriptionRef.current.value,
    };

    props.onAddCard(card);
    nameRef.current.value = "";
    typeRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <h1>Add new card</h1>
      <div className={classes["input-field"]}>
        <label htmlFor="name">Card name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes["input-field"]}>
        <label htmlFor="type">Card type</label>
        <input type="text" id="type" ref={typeRef} />
      </div>
      <div className={classes["input-field"]}>
        <label htmlFor="description">Card description</label>
        <textarea type="text" id="description" ref={descriptionRef} />
      </div>
      <button>Add card</button>
    </form>
  );
}

export default AddCard;
