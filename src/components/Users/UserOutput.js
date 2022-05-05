import React from "react";

import Card from "../UI/Card";
import classes from "./UserOutput.module.css";

const UserOutput = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Card>
  );
};
export default UserOutput;
