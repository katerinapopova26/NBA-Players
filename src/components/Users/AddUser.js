import React, { useState, Fragment } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length > 2;
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredData = { name: enteredName };

    if (!enteredNameIsValid) {
      return;
    }

    props.onAddUser(enteredData);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? [classes.form_control, classes.invalid].join(" ")
    : classes.form_control;

  return (
    <Fragment>
      <Card className={nameInputClasses}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={usernameChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameInputIsInvalid && (
            <p className={classes.text_error}>
              Please enter at least 3 characters.
            </p>
          )}
          <div className={classes.actions}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
