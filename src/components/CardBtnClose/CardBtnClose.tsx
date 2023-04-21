import React from 'react';

interface IBtn {
  setIsShowInfo: (isOpen: boolean) => void;
}

export const CardBtnClose = ({ setIsShowInfo }:IBtn) => (
  <div className="modal__back__btn">
    <button className="modal__btn" type="button" aria-label="modal" onClick={() => setIsShowInfo(false)} />
  </div>
);
