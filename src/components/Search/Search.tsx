import { IoSearch } from "react-icons/io5";
import SearchStyled from "./SearchStyled";

const Search = () => {
  return (
    <SearchStyled className="search-group">
      <label
        className="search-group__label"
        htmlFor="search"
        aria-label="search"
      >
        <span className="search-group__icon">
          <IoSearch />
        </span>
        <input
          className="search-group__control"
          type="text"
          id="search"
          placeholder="Search"
        />
      </label>
    </SearchStyled>
  );
};

export default Search;
