import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../store/actions";
import { getSearchValue } from "../store/selectors";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as ClearIcon } from "../assets/clear-search.svg";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => getSearchValue(state));
  return (
    <div className="search-bar__wrapper">
      <input
        value={searchValue}
        className="search-bar__input"
        placeholder="Search for country"
        onChange={event => dispatch(searchCountry(event.target.value))}
      />
      {searchValue ? (
        <ClearIcon
          className="search-bar__icon--hover"
          title="Clear"
          onClick={() => dispatch(searchCountry(""))}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <SearchIcon className="search-bar__icon" />
      )}
    </div>
  );
};

export default SearchBar;
