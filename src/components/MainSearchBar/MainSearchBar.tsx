import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import './MainSearchBarStyles.css';
import { IListFilm } from '../types';

interface IMainSearch {
  setListFilm: (film: IListFilm[]) => void;
}

const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=60e12f358c2229eee542fbb16a0630ae&query=';

export const MainSearchBar = ({ setListFilm }: IMainSearch) => {
  const initInputValue = localStorage.getItem('search');
  const searchTest = initInputValue ? JSON.parse(initInputValue) : '';
  const [search, setSearch] = useState(searchTest);
  const [isShowLoader, setIsShowLoader] = useState(false);

  useEffect(() => () => {
    if (search) {
      localStorage.setItem('inputValue', JSON.stringify(search));
    }
  }, [search]);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  async function fetchMovies() {
    try {
      setIsShowLoader(true);
      const response = await fetch(`${baseUrl}${search || 'the'}`);
      if (response.ok) {
        setTimeout(async () => {
          setIsShowLoader(false);
          const body = await response.json();
          setListFilm(body.results);
          return body;
        }, 500);
      }
      throw new Error('Problem with fetch');
    } catch (error) {
      return { success: false };
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const saveValueToLocalStorage = (event: React.MouseEvent<HTMLButtonElement>
  | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('search', JSON.stringify(search));
    fetchMovies();
  };

  return (
    <>
      {isShowLoader && <div className="loader"><p>Loading...</p></div>}
      <form className="search-bar" onSubmit={saveValueToLocalStorage}>
        <label>
          <input
            value={search}
            onChange={onInputChange}
            className="search"
            type="search"
            placeholder="..."
            name="searchInput"
            aria-label="searchInput"
            id="searchInput"
          />
        </label>
        <button
          type="button"
          aria-label="sendButton"
          id="sendButton"
          className="search__btn"
          onClick={saveValueToLocalStorage}
        >
          Search
        </button>
      </form>
    </>
  );
};
