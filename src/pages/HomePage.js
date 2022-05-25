import React from "react";
import { useNavigate } from "react-router-dom";

import AddUser from "../components/Users/AddUser";
import classes from "./HomePage.module.css";

const HomePage = (props) => {
  const navigate = useNavigate();

  const saveUserHandler = (Uname) => {
    const enteredData = {
      ...Uname,
      id: Math.random().toString(),
    };
    props.onAddUser(enteredData);
  };

  navigate("/players", { replace: true });

  return (
    <div className={classes.scene_home}>
      <AddUser onAddUser={saveUserHandler} />
    </div>
  );
};

export default HomePage;
