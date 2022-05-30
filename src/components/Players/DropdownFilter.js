import React from "react";

const DropdownFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeDropdown(event.target.value);
  };

  return (
    <div>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="">All Positions</option>
        <option value="G">Guard</option>
        <option value="C">Center</option>
        <option value="F">Forward</option>
      </select>
    </div>
  );
};

export default DropdownFilter;
