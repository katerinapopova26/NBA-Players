import React, { Fragment, useState, useEffect } from "react";

import PlayersList from "./PlayersList";
import InputFilter from "./InputFilter";
import DropdownFilter from "./DropdownFilter";
import DropdownSorting from "./DropdownSorting";
import Card from "../UI/Card";
import classes from "./Players.module.css";

const Players = (props) => {
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState("");
  const [filteredPos, setFilteredPos] = useState();
  const [sortedPlayers, setSortedPlayers] = useState();

  useEffect(() => {
    const data = [...props.players];
    const filterSearchName = (data) => {
      return data.filter((player) => {
        return player.fullname
          .toLowerCase()
          .includes(searchPlayer.toLowerCase());
      });
    };

    const filterPlayerPosition = (data) => {
      return data.filter((player) => {
        if (!filteredPos) {
          return data;
        }
        return player.position === filteredPos;
      });
    };

    const sortPlayers = (data) =>
      data.sort((a, b) => {
        if (sortedPlayers === "asc") {
          return a.fullname > b.fullname ? 1 : -1;
        }
        if (sortedPlayers === "desc") {
          return a.fullname < b.fullname ? 1 : -1;
        }
        return a.fullname === b.fullname;
      });

    let result = data;
    result = filterSearchName(result);
    result = filterPlayerPosition(result);
    result = sortPlayers(result);
    setFilteredPlayers(result);
  }, [
    filteredPos,
    searchPlayer,
    sortedPlayers,
    filteredPlayers,
    props.players,
  ]);

  const inputSearchHandler = (enteredPlayer) => {
    setSearchPlayer(enteredPlayer);
  };

  const dropdownHandler = (playerPosition) => {
    setFilteredPos(playerPosition);
  };

  const sortingHandler = (sortingPlayers) => {
    setSortedPlayers(sortingPlayers);
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
          <DropdownSorting
            selected={sortedPlayers}
            onChangeDropdown={sortingHandler}
          />
        </div>
        <PlayersList players={filteredPlayers} />
      </Card>
    </Fragment>
  );
};

export default Players;
