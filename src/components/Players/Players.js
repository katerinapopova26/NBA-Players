import React, { Fragment, useState } from "react";

import PlayersList from "./PlayersList";
import InputFilter from "./InputFilter";
import Card from "../UI/Card";
import classes from "./Players.module.css";

const Players = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputSearchHandler = (enteredPlayer) => {
    setSearchTerm(enteredPlayer);
  };

  const filteredPlayers = props.players.filter((player) => {
    return player.fullname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Fragment>
      <Card className={classes.card_table}>
        <div className={classes.filters}>
          <h2>All Players</h2>
          <InputFilter
            entered={searchTerm}
            onChangeInput={inputSearchHandler}
          />
        </div>
        <PlayersList players={filteredPlayers} />
      </Card>
    </Fragment>
  );
};

export default Players;
