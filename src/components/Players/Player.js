import React from "react";

import classes from "./Player.module.css";

const Player = (props) => {
  return (
    <React.Fragment>
      <tr className={classes.player_row}>
        <td>{props.id}</td>
        <td>{props.fullname}</td>
        <td>{props.position}</td>
        <td>{props.team}</td>
        <td>{props.city}</td>
      </tr>
    </React.Fragment>
  );
};

export default Player;
