import React, { ChangeEvent, Component } from 'react';
import './MainSearchBarStyles.css';

export class MainSearchBar extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    search: localStorage.getItem('search') || '',
  };

  componentWillUnmount() {
    const { search } = this.state;
    alert('The component is going to be unounte');
    localStorage.setItem('inputValue', JSON.stringify(search));
  }

  saveValueToLocalStorage = () => {
    const { search } = this.state;
    localStorage.setItem('search', search);
  };

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  render() {
    // const { search } = this.state;

    return (
      <form className="search-bar">
        <label>
          <input
            // ref={search}
            onChange={this.onInputChange}
            className="search"
            type="search"
            placeholder="..."
            name=""
            id=""
          />
        </label>
        <button type="button" aria-label="label" className="search__btn" onClick={this.saveValueToLocalStorage}>
          Search
        </button>
      </form>
    );
  }
}
