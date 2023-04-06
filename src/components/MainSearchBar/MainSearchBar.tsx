import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import './MainSearchBarStyles.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MainSearchBar = ({ listFilm, setListFilm }: any) => {
  const initInputValue = localStorage.getItem('search');
  const searchTest = initInputValue ? JSON.parse(initInputValue) : '';
  const [search, setSearch] = useState(searchTest);

  useEffect(() => () => {
    if (search) {
      localStorage.setItem('inputValue', JSON.stringify(search));
    }
  }, [search]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputChange = event.target.value;
    setSearch(inputChange);
  };

  const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=60e12f358c2229eee542fbb16a0630ae&query=';

  async function fetchMovies() {
    try {
      const response = await fetch(`${baseUrl}=${search}`);
      if (response.ok) {
        const body = await response.json();
        listFilm = body.results;
        setListFilm(listFilm);
        console.log(listFilm);
        return body;
      }
      throw new Error('Problem with fetch');
    } catch (error) {
      return { success: false };
    }
  }

  const saveValueToLocalStorage = (event: React.MouseEvent<HTMLButtonElement>
  | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('search', JSON.stringify(search));
    fetchMovies();
  };

  return (
    <form className="search-bar" onSubmit={saveValueToLocalStorage}>
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
        onClick={saveValueToLocalStorage}
      >
        Search
      </button>
    </form>
  );
};
