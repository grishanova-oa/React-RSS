import React, {
  ChangeEvent, useEffect,
} from 'react';
import './MainSearchBarStyles.css';
import { useAppDispatch, useAppSelector } from '../../hook';
import { saveSearchValue } from '../../store/slice/CommonSlice';
import { getIsShowLoader, getSearchValue } from '../../store/selector/commonSelectors';
import { addListFilmAsync } from '../../thunks/thunks';

export const MainSearchBar = () => {
  const searchValue = useAppSelector(getSearchValue);
  const isShowLoader = useAppSelector(getIsShowLoader);
  const dispatch = useAppDispatch();

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(saveSearchValue(target.value));
  };

  useEffect(() => {
    dispatch(addListFilmAsync(searchValue || 'the'));
  }, []);

  const saveValueToLocalStorage = (event: React.MouseEvent<HTMLButtonElement>
  | React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addListFilmAsync(searchValue));
  };

  return (
    <>
      {isShowLoader && <div className="loader"><p>Loading...</p></div>}
      <form className="search-bar" onSubmit={saveValueToLocalStorage}>
        <label>
          <input
            value={searchValue}
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
