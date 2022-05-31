import React from "react";

import classes from "./DropdownFilter.module.css";

const DropdownFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeDropdown(event.target.value);
  };

  return (
    <div>
      <select
        value={props.selected}
        onChange={dropdownChangeHandler}
        className={classes.positions_filter}
      >
        <option value="">All Positions</option>
        <option value="G">Guard</option>
        <option value="C">Center</option>
        <option value="F">Forward</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
