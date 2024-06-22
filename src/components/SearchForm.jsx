import { useState } from "react";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
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
