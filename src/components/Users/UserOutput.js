import React from "react";

import classes from "./UserOutput.module.css";

const UserOutput = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserOutput;
