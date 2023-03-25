import React, { Component, RefObject } from 'react';
import { IFormCard } from '../types';
import './FormInnerStyles.css';

interface IState {
  [key: string]: string;
}

let isMistake = false;
let correctValues: IFormCard = {};

interface IProps {
  addNewCard: (card: IFormCard) => void;
}

export class FormInner extends Component<IProps, IState> {
  inputTitle: React.RefObject<HTMLInputElement> = React.createRef();

  inputCost: React.RefObject<HTMLInputElement> = React.createRef();

  inputDate: RefObject<HTMLInputElement> = React.createRef();

  inputImage: React.RefObject<HTMLInputElement> = React.createRef();

  inputCurDol: RefObject<HTMLInputElement> = React.createRef();

  inputCurEuro: RefObject<HTMLInputElement> = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.inputTitle = React.createRef();
    this.inputCost = React.createRef();
    this.inputDate = React.createRef();
    this.inputImage = React.createRef();
    this.inputCurDol = React.createRef();
    this.inputCurEuro = React.createRef();
    this.state = {};
  }

  addMistake = (key: string, value: string) => {
    isMistake = true;
    this.setState({ [key]: value });
  };

  checkTitleValue = () => {
    const titleValue = this.inputTitle.current?.value;

    if (!titleValue) {
      this.addMistake('title', 'Error title');

      return;
    }

    const isTitleValid = titleValue[0].toUpperCase() === titleValue[0] && titleValue.length > 4;
    // && titleValue.indexOf('/^[^_a-zа-я]i')

    if (isTitleValid) {
      correctValues.title = titleValue;
    } else {
      this.addMistake('title', 'Error title');
    }
  };

  checkCostValue = () => {
    const costValue = this.inputCost.current?.value;

    if (!costValue) {
      this.addMistake('cost', 'Error cost');

      return;
    }

    const isCostValid = costValue.length < 4;

    if (isCostValid) {
      correctValues.cost = costValue;
    } else {
      this.addMistake('cost', 'Error cost');
    }
  };

  checkDateValue = () => {
    const dateValue = this.inputDate.current?.value;

    if (!dateValue) {
      this.addMistake('date', 'Error date');
      return;
    }
    if (dateValue) {
      correctValues.date = dateValue;
    }
  };

  checkImageValue = () => {
    const imageValue = this.inputImage.current?.files?.[0];

    if (!imageValue) {
      this.addMistake('file', 'Error File');
      return;
    }
    if (imageValue) {
      const newImgUrl = URL.createObjectURL(imageValue);
      correctValues.file = newImgUrl;
    }
  };

  checkCurrencyValue = () => {
    const curEuroValue = this.inputCurEuro.current?.value;
    const isEuro = this.inputCurEuro.current?.checked;
    const curDolValue = this.inputCurDol.current?.value;
    console.log('euro', curEuroValue);
    console.log('euro', isEuro);

    console.log('dollar', curDolValue);
    if (curEuroValue === '€' && isEuro) {
      // debugger;
      correctValues.currency = curEuroValue;
    } else {
      correctValues.currency = curDolValue;
    }
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isMistake = false;

    this.checkTitleValue();
    this.checkCostValue();
    this.checkDateValue();
    this.checkImageValue();
    this.checkCurrencyValue();
    if (!isMistake) {
      const { addNewCard } = this.props;
      // debugger;
      addNewCard(correctValues);
      correctValues = {};
      if (this.inputCost.current) {
        this.inputCost.current.value = '';
      }
      if (this.inputTitle.current) {
        this.inputTitle.current.value = '';
      }
      if (this.inputDate.current) {
        this.inputDate.current.value = '';
      }
      if (this.inputImage.current) {
        this.inputImage.current.value = '';
      }
    }
  };

  render() {
    const { state } = this;
    return (
      <div className="form-inner">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form">
            <label htmlFor="text">Enter the City:</label>
            <input type="text" name="name" ref={this.inputTitle} />
            {state.title && <div>{state.title}</div>}
          </div>
          <div className="form">
            <label htmlFor="number">Enter the cost:</label>
            <input type="number" name="name" ref={this.inputCost} />
            {state.cost && <div>{state.cost}</div>}

          </div>
          <div className="form">
            <label htmlFor="data">From what date:</label>
            <input type="date" name="name" min="2023-03-27" ref={this.inputDate} />
            {state.date && <div>{state.date}</div>}
          </div>
          <div className="form">
            <label htmlFor="radio">I agree...</label>
            <input type="checkbox" required />
          </div>
          <div className="form-input">
            <label htmlFor="image-input">Image:</label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              id="image-input"
              ref={this.inputImage}
              // onInput={this.handleImageInput}
            />
            {state.file && <div>{state.file}</div>}
          </div>
          <div className="form">
            <label htmlFor="radio">Choose currency:</label>
            <div className="radio__inner">
              <label htmlFor="test1">
                <input
                  id="test1"
                  type="radio"
                  value="$"
                  name="current"
                  defaultChecked
                  ref={this.inputCurDol}
                />
                Dollar
              </label>
              <label htmlFor="test2">
                <input
                  id="test2"
                  type="radio"
                  value="€"
                  name="current"
                  ref={this.inputCurEuro}
                />
                Euro
              </label>
            </div>
            <div className="form-input">
              <label htmlFor="select">Choose type:</label>
              <select className="select">
                <option label=" " />
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="hotel">Hotel</option>
                <option value="hotel">Hotel</option>
                <option value="hotel">Hostel</option>
                <option value="hotel">Room</option>
              </select>
            </div>
          </div>
          <div className="form">
            <label htmlFor="submit">
              {/* Status: */}
            </label>
            <button type="submit" className="form__btn">Submit </button>
          </div>
        </form>
      </div>
    );
  }
}

// 1. Заполнить форму
// 2. Сабмит формы
// 3. Получение значений из каждого инпута, селектора и т.д
// 4. Валидация каждого значения
// 4.1 Для значений которые не прошли валидацию - добавить в state.mistakes новую ошибку
// 4.2 Завести поле isMistake = false. Если появляется ошибка сететь ее в true
// 4.3 Заводим обект в котором будем хранить значения, которые прошли валидацию (correctValues)

// 6. После проверки всех полей проверить isMistake. Если false - валидация
// пройдена, сохраняем значения (correctValues) формы в итоговый массив для отображения карт.
// Если isMistake true - ничего не делаем
// ждем исправления ошибок и нового сабмит.
// 7. При новом сабмите сетаем isMistake false. Начинаем все с пункта 3

// eslint-disable-next-line no-lone-blocks
{ /*
          <div className="form-input">
            <label htmlFor="select">Choose type:</label>
            <select className="select">
              <option label=" " />
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="hotel">Hotel</option>
              <option value="hotel">Hotel</option>
              <option value="hotel">Hostel</option>
              <option value="hotel">Room</option>
            </select>
          </div>
          <div className="form">
            <label htmlFor="radio">Describe the offer:</label>
            <textarea
              name="text"
              rows={4}
              placeholder="We are wait you..."
            />
          </div>
 */ }
