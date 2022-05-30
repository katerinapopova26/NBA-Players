import React from "react";

import Player from "./Player";
import classes from "./PlayersList.module.css";

const PlayersList = (props) => {
  return (
    <table className={classes.content_table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Player</th>
          <th>Position</th>
          <th>Team</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            fullname={player.fullname}
            position={player.position}
            team={player.team}
            city={player.city}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PlayersList;
