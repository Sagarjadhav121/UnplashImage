import { useState } from "react";
import { gloabalContext } from "../utils";

const SearchForm = () => {
  const { setSearchTerm } = gloabalContext();
  // const [inputValue, setInputValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="cat"
        className="form-input search-input"
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
