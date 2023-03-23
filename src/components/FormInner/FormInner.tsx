import React, { Component, RefObject } from 'react';
import { IFormCard } from '../types';
import './FormInnerStyles.css';

interface IMistakes {
  [key: string]: string;
}
interface IState {
  mistakes: IMistakes;
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

  //   inputProductStatus: RefObject<HTMLInputElement> = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.inputTitle = React.createRef();
    this.inputCost = React.createRef();
    this.inputDate = React.createRef();
    this.state = {
      mistakes: {},
    };
  }

  checkTitleValue = () => {
    const titleValue = this.inputTitle.current?.value;
    const { mistakes } = this.state;

    if (!titleValue) {
      isMistake = true;
      this.setState({
        mistakes: {
          ...mistakes,
          title: 'Не валид Title',
        },
      });

      return;
    }

    const isTitleValid = titleValue[0].toUpperCase() === titleValue[0] && titleValue.length > 4;
    // && titleValue.indexOf('/^[^_a-zа-я]i')

    if (isTitleValid) {
      correctValues.title = titleValue;
    } else {
      isMistake = true;
      this.setState({
        mistakes: {
          ...mistakes,
          title: 'Не валид Title',
        },
      });
    }
  };

  checkCostValue = () => {
    const costValue = this.inputCost.current?.value;
    const { mistakes } = this.state;

    console.log(costValue);

    if (!costValue) {
      isMistake = true;
      this.setState({
        mistakes: {
          ...mistakes,
          cost: 'Не валид Number',
        },
      });

      return;
    }

    const isCostValid = costValue.length < 4;

    if (isCostValid) {
      correctValues.cost = costValue;
    } else {
      isMistake = true;
      this.setState({
        mistakes: {
          ...mistakes,
          cost: 'Не валид Number',
        },
      });
    }
  };

  checkDateValue = () => {
    const dateValue = this.inputDate.current?.value;
    const { mistakes } = this.state;

    if (!dateValue) {
      isMistake = true;
      this.setState({
        mistakes: {
          ...mistakes,
          date: 'Error',
        },
      });

      return;
    }
    if (dateValue) {
      correctValues.date = dateValue;
    } else {
      isMistake = true;
      this.setState({
        mistakes: {
          ...mistakes,
          date: 'Error',
        },
      });
    }
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ mistakes: {} });
    isMistake = false;

    this.checkTitleValue();
    this.checkCostValue();
    this.checkDateValue();

    if (!isMistake) {
      const { addNewCard } = this.props;
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
    }
  };

  render() {
    const { mistakes } = this.state;
    return (
      <div className="form-inner">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form">
            <label htmlFor="text">Enter the City:</label>
            <input type="text" name="name" ref={this.inputTitle} />
            {mistakes.title && <div>{mistakes.title}</div>}
          </div>
          <div className="form">
            <label htmlFor="number">Enter the cost:</label>
            <input type="number" name="name" ref={this.inputCost} />
            {mistakes.cost && <div>{mistakes.cost}</div>}

          </div>
          <div className="form">
            <label htmlFor="data">From what date:</label>
            <input type="date" name="name" ref={this.inputDate} />
            {mistakes.date && <div>{mistakes.date}</div>}
          </div>
          <button type="submit" className="form__btn">Submit </button>
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
          <div className="form">
            <label htmlFor="radio">From what date:</label>
            <input type="date" name="name" />
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

          <div className="form">
            <label htmlFor="radio">Choose currency:</label>
            <div className="radio__inner">
              <input type="radio" value="Male" name="gender" />
              Dollar
              <input type="radio" value="Female" name="gender" />
              Euro
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="image-input">Image:</label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              id="image-input"
              ref={this.inputImg}
            />
          </div>
          <div className="form">
            <label htmlFor="radio">Describe the offer:</label>
            <textarea
              name="text"
              rows={4}
              placeholder="We are wait you..."
            />
          </div>
          <div className="form">
            <label htmlFor="radio">I agree...</label>
            <input type="checkbox" />
          </div>
          <div className="form">
            <label htmlFor="submit">
              Status:
            </label>
            <button type="submit" className="form__btn">Submit </button>
          </div> */ }
