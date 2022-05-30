import React from "react";
import classes from "./InputFilter.module.css";

const InputFilter = (props) => {
  const inputChangeHandler = (event) => {
    props.onChangeInput(event.target.value);
  };

  return (
    <div>
      <input
        className={classes.input}
        type="text"
        placeholder="Search Players"
        value={props.entered}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default InputFilter;
