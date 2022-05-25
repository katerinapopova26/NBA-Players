import React from "react";

const Player = (props) => {
  return (
    <React.Fragment>
      <tr>
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
