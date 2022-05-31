import React, { Fragment, useState, useEffect } from "react";

import PlayersList from "./PlayersList";
import DropdownFilter from "./DropdownFilter";
import InputFilter from "./InputFilter";
import Card from "../UI/Card";
import classes from "./Players.module.css";

const Players = (props) => {
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [filteredPos, setFilteredPos] = useState();
  const [searchPlayer, setSearchPlayer] = useState("");

  useEffect(() => {
    let result = props.players;

    if (filteredPos) {
      result = props.players.filter((player) => {
        if (!filteredPos) {
          return props.players;
        }
        return player.position === filteredPos;
      });
    }

    if (searchPlayer) {
      result = props.players.filter((player) => {
        return player.fullname
          .toLowerCase()
          .includes(searchPlayer.toLowerCase());
      });
    }

    setFilteredPlayers(result);
  }, [filteredPos, searchPlayer, props.players]);

  const dropdownHandler = (playerPosition) => {
    setFilteredPos(playerPosition);
  };

  const inputSearchHandler = (enteredPlayer) => {
    setSearchPlayer(enteredPlayer);
  };

  return (
    <Fragment>
      <Card className={classes.card_table}>
        <div className={classes.filters}>
          <h2>All Players</h2>

          <InputFilter
            entered={searchPlayer}
            onChangeInput={inputSearchHandler}
          />
          <DropdownFilter
            selected={filteredPos}
            onChangeDropdown={dropdownHandler}
          />
        </div>
        <PlayersList players={filteredPlayers} />
      </Card>
    </Fragment>
  );
};

export default Players;
