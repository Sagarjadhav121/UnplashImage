import { useState } from "react";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="cat"
        className="form-input search-input"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
