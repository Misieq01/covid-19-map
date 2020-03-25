import React from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../store/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      className="search-bar__input"
      placeholder="Search for country"
      onChange={event => dispatch(searchCountry(event.target.value))}
    />
  );
};

export default SearchBar;
