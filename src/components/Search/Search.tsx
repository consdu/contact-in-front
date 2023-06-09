import { IoSearch } from "react-icons/io5";
import SearchStyled from "./SearchStyled";
import { useState } from "react";

interface SearchProps {
  onSearchInputChange: (value: string) => void;
}

const Search = ({ onSearchInputChange }: SearchProps): React.ReactElement => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    onSearchInputChange(event.target.value);
  };

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
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </label>
    </SearchStyled>
  );
};

export default Search;
