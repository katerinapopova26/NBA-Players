import { Fragment } from "react";

import classes from "./MainHeader.module.css";
import Button from "../UI/Button";

const MainHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img
          src="https://cdn.nba.com/logos/nba/nba-logoman-75-word_white.svg"
          alt="nba logo"
          className={classes.logo}
        />
        <Button className={classes.button}>My Team</Button>
      </header>
    </Fragment>
  );
};

export default MainHeader;
