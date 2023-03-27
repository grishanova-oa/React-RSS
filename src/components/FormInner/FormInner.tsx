import React, { Component, RefObject } from 'react';
import { InputTitle } from '../InputTitle';
import { IFormCard } from '../types';
import './FormInnerStyles.css';
import { checkTitleValid, isCostValid, isDescriptionValid } from './helpers';

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

  inputSelect: React.RefObject<HTMLSelectElement> = React.createRef();

  inputCheckbox: React.RefObject<HTMLInputElement> = React.createRef();

  inputDescription: RefObject<HTMLTextAreaElement> = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  addMistake = (key: string, value: string) => {
    isMistake = true;
    this.setState({ [key]: value });
  };

  checkTitleValue = () => {
    const titleValue = this.inputTitle.current?.value;

    if (!titleValue) {
      this.addMistake('title', 'Add city');

      return;
    }

    if (checkTitleValid(titleValue)) {
      correctValues.title = titleValue;
    } else {
      this.addMistake('title', 'Use only latin letters with first capital');
    }
  };

  checkCostValue = () => {
    const costValue = this.inputCost.current?.value;

    if (!costValue) {
      this.addMistake('cost', 'Add cost');

      return;
    }

    if (isCostValid(costValue)) {
      correctValues.cost = costValue;
    } else {
      this.addMistake('cost', 'Use positive numbers!');
    }
  };

  checkDateValue = () => {
    const dateValue = this.inputDate.current?.value;

    if (!dateValue) {
      this.addMistake('date', 'Add date');
    } else {
      correctValues.date = dateValue;
    }
  };

  checkImageValue = () => {
    const imageValue = this.inputImage.current?.files?.[0];

    if (!imageValue) {
      this.addMistake('file', 'Add file!');
    } else {
      correctValues.file = URL.createObjectURL(imageValue);
    }
  };

  checkCurrencyValue = () => {
    const curEuroValue = this.inputCurEuro.current?.value;
    const isEuro = this.inputCurEuro.current?.checked;
    const curDolValue = this.inputCurDol.current?.value;
    if (curEuroValue === '€' && isEuro) {
      correctValues.currency = curEuroValue;
    } else {
      correctValues.currency = curDolValue;
    }
  };

  checkSelectValue = () => {
    const selectValue = this.inputSelect.current?.value;

    switch (selectValue) {
      case 'room':
      case 'hostel':
      case 'house':
      case 'apartment':
      case 'hotel':
        correctValues.select = selectValue;
        break;
      default:
        this.addMistake('select', 'Choose type');
        break;
    }
  };

  checkDescription = () => {
    const selectDescription = this.inputDescription.current?.value;

    if (!selectDescription) {
      this.addMistake('description', 'Enter description');

      return;
    }

    if (isDescriptionValid(selectDescription)) {
      correctValues.description = selectDescription;
    } else {
      this.addMistake('description', 'Use only latin letters');
    }
  };

  checkRadioCheckbox = () => {
    const selectCheckbox = this.inputCheckbox.current?.checked;
    if (!selectCheckbox) {
      this.addMistake('agree', 'Error');
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
    this.checkSelectValue();
    this.checkDescription();
    this.checkRadioCheckbox();

    if (!isMistake) {
      const { addNewCard } = this.props;
      addNewCard(correctValues);
      correctValues = {};
      this.inputCost.current!.value = '';
      this.inputTitle.current!.value = '';
      this.inputDate.current!.value = '';
      this.inputImage.current!.value = '';
      this.inputSelect.current!.value = '';
      this.inputDescription.current!.value = '';
      this.inputCheckbox.current!.checked = false;
      this.setState({
        title: '',
        cost: '',
        date: '',
        file: '',
        select: '',
        description: '',
        agree: '',
      });
      this.addMistake('saved', 'Card is Saved');
      setTimeout(() => {
        this.setState({
          saved: '',
        });
      }, 4000);
    }
  };

  render() {
    const { state } = this;
    return (
      <div className="form-inner">
        <form onSubmit={this.handleFormSubmit}>
          <InputTitle title={state.title} inputTitleRef={this.inputTitle} />

          <div className="form">
            <label htmlFor="cost">Enter the cost:</label>
            <input id="cost" type="number" name="name" step="1" ref={this.inputCost} />
            {state.cost && <div className="red">{state.cost}</div>}

          </div>
          <div className="form">
            <label htmlFor="data">From what date:</label>
            <input type="date" name="name" min="2023-03-27" ref={this.inputDate} />
            {state.date && <div className="red">{state.date}</div>}
          </div>
          <div className="form">
            <div className="form-input">
              <label htmlFor="select">Choose type:</label>
              <select className="select" ref={this.inputSelect}>
                <option label=" " />
                <option value="room">Room</option>
                <option value="hostel">Hostel</option>
                <option value="hotel">Hotel</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </select>
              {state.select && <div className="red">{state.select}</div>}
            </div>
          </div>
          <div className="form-input form-image">
            <p className="label">Add image</p>
            <label htmlFor="image-input">Image</label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              id="image-input"
              ref={this.inputImage}
            />
            {state.file && <div className="red">{state.file}</div>}
          </div>
          <div className="form">
            <label htmlFor="radio">Choose currency:</label>
            <div className="radio__inner">
              <label htmlFor="radio1">
                <input
                  id="radio1"
                  type="radio"
                  value="$"
                  name="current"
                  defaultChecked
                  ref={this.inputCurDol}
                />
                Dollar
              </label>
              <label htmlFor="radio2">
                <input
                  id="radio2"
                  type="radio"
                  value="€"
                  name="current"
                  ref={this.inputCurEuro}
                />
                Euro
              </label>
              {state.currency && <div className="red">{state.currency}</div>}
            </div>
          </div>

          <div className="form">
            <label htmlFor="radio">Describe the offer:</label>
            <textarea
              id="radio"
              name="text"
              rows={4}
              placeholder="We are wait you..."
              ref={this.inputDescription}
            />
            {state.description && <div className="red">{state.description}</div>}
          </div>
          <div className="form">
            <div className="form">
              <label htmlFor="radio">I agree to the processing of personal data</label>
              <input type="checkbox" className="input-checkbox" ref={this.inputCheckbox} />
              {state.agree && <div className="red">{state.agree}</div>}
            </div>
          </div>
          <div className="form">
            <label htmlFor="submit">
              {state.saved && <div className="red">{state.saved}</div>}
            </label>
            <button type="submit" value="Submit" className="form__btn">Submit </button>
          </div>
        </form>
      </div>
    );
  }
}
