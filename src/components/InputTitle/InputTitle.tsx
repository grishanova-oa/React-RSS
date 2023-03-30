import React from 'react';

interface IInputTitle {
  title: string;
  inputTitleRef: React.RefObject<HTMLInputElement>
}

export const InputTitle = ({ title, inputTitleRef }: IInputTitle) => (
  <div className="form">
    <label htmlFor="text">Enter the City:</label>
    <input type="text" name="inputTitle" className="inputTitle" aria-label="cost-input" ref={inputTitleRef} />
    {title && <div className="red">{title}</div>}
  </div>
);
