import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValue = ({ target }) => {
    setSearchValue(target.value);
    console.log(target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search"
      value={searchValue}
      onChange={onSearchValue}
    />
  );
}

export { TodoSearch };
