import React from "react";

import classes from "./Dropdown.module.css";

const DropdownFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeDropdown(event.target.value);
  };

  return (
    <div>
      <select
        value={props.selected}
        onChange={dropdownChangeHandler}
        className={classes.dropdown}
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
