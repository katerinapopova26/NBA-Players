import { Fragment } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/myteam">
          <Button className={classes.button}>My Team</Button>
        </Link>
        {/* <div className={classes.user_output}>
          {props.userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div> */}
      </header>
    </Fragment>
  );
};

export default MainHeader;
