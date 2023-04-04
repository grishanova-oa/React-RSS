import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import './MainSearchBarStyles.css';

export const MainSearchBar = () => {
  const initInputValue = localStorage.getItem('search');
  const searchTest = initInputValue ? JSON.parse(initInputValue) : '';
  const [search, setSearch] = useState(searchTest);

  useEffect(() => () => {
    if (search) {
      localStorage.setItem('search', JSON.stringify(search));
    }
  }, [search]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputChange = event.target.value;
    setSearch(inputChange);
  };

  return (
    <form className="search-bar">
      <label>
        <input
          value={search}
          onChange={onInputChange}
          className="search"
          type="search"
          placeholder="..."
          name=""
          id=""
        />
      </label>
      <button
        type="button"
        aria-label="label"
        className="search__btn"
      >
        Search
      </button>
    </form>
  );
};
