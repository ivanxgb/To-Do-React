import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
