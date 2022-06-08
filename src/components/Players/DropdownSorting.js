import React from "react";

import classes from "./Dropdown.module.css";

const DropdownSorting = (props) => {
  const dropdownSortingHandler = (event) => {
    props.onChangeDropdown(event.target.value);
  };

  return (
    <div>
      <select
        value={props.selected}
        onChange={dropdownSortingHandler}
        className={classes.dropdown}
      >
        <option value="">Sort By</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default DropdownSorting;
