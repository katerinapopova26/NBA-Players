import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddUser from "../components/Users/AddUser";
import UserOutput from "../components/Users/UserOutput";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [userOutput, setUserOutput] = useState([]);

  const addUserHandler = (userName) => {
    setUserOutput(() => {
      return [{ name: userName, id: Math.random().toString() }];
    });

    navigate("/players", { replace: true });
  };

  return (
    <div className={classes.scene_home}>
      <AddUser onAddUser={addUserHandler} />
      <UserOutput users={userOutput} />
    </div>
  );
};

export default HomePage;
