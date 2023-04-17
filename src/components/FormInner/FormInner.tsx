import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormCard } from '../types';
import './FormInnerStyles.css';
import { useAppDispatch } from '../../hook';
import { addNewCard } from '../../store/slice/CommonSlice';

interface Event<T = EventTarget> {
  target: T;
}

export const FormInner = () => {
  const dispatch = useAppDispatch();

  const [successMsg, setSuccessMsg] = useState('');
  const [newPathFile, setNewPathFile] = useState<string | null>(null);

  const changeHandler = ({ target }: Event<HTMLInputElement>) => {
    if (target.files) {
      const pathFile = target.files[0];
      setNewPathFile(URL.createObjectURL(pathFile));
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormCard>();

  function onSubmit(data: IFormCard) {
    if (newPathFile) {
      data.inputImage = newPathFile;
    }

    dispatch(addNewCard(data));

    setSuccessMsg('Congratulation! Card is created!');
    setSuccessMsg('');
    reset();
    setNewPathFile(null);
  }

  return (
    <div className="form-inner">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <label htmlFor="text">Enter the City:</label>
          <input
            type="text"
            className="inputTitle"
            aria-label="cost-input"
            {...register('inputTitle', {
              required: true,
              pattern: /^[a-z\s]+$/i,
              validate: (value) => value[0].toUpperCase() === value[0],
            })}
          />
          {errors.inputTitle?.type === 'required' && (
            <div className="red">Please, enter the city</div>)}
          {errors.inputTitle?.type === 'pattern' && (
            <div className="red">Use only letter</div>)}
          {errors.inputTitle?.type === 'validate' && (
            <div className="red">Use the first letter as upper</div>)}
        </div>
        <div className="form">
          <label htmlFor="cost">Enter the cost:</label>
          <input
            id="cost"
            type="number"
            step="1"
            {...register('inputCost', {
              required: true,
              maxLength: 5,
              min: 0,
            })}
          />
          {errors.inputCost?.type === 'required' && (
            <div className="red">Please, enter the cost</div>)}
          {errors.inputCost?.type === 'min' && (
            <div className="red">Please, use positive number</div>)}
        </div>
        <div className="form">
          <label htmlFor="data">From what date:</label>
          <input
            type="date"
            min="2023-03-27"
            {...register('date', {
              required: true,
            })}
          />
          {errors.date?.type === 'required' && (
          <div className="red">Please, enter the date</div>)}
        </div>
        <div className="form">
          <div className="form-input">
            <label htmlFor="select">Choose type:</label>
            <select
              className="select"
              {...register('inputSelect', {
                required: true,
              })}
            >
              <option label=" " />
              <option value="room">Room</option>
              <option value="hostel">Hostel</option>
              <option value="hotel">Hotel</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
            </select>
            {errors.inputSelect?.type === 'required' && (
            <div className="red">
              Please, enter type of the resident
            </div>
            )}
          </div>
        </div>
        <div className="form-input form-image">
          <p className="label">Add image</p>
          <label htmlFor="image-input">Image</label>
          <input
            type="file"
            accept="image/jpeg,image/png,image/gif"
            id="image-input"
            {...register('inputImage', {
              required: true,
            })}
            onChange={changeHandler}
          />
          {errors.inputImage?.type === 'required' && (
          <div className="red">Please, add image</div>)}
        </div>
        <div className="form">
          <label htmlFor="radio">Choose currency:</label>
          <div className="radio__inner">
            <label htmlFor="radio1">
              <input
                id="radio1"
                type="radio"
                value="$"
                {...register('current', {
                  required: 'Please select your gender',
                })}
              />
              Dollar
            </label>
            <label htmlFor="radio2">
              <input
                id="radio2"
                type="radio"
                value="€"
                {...register('current')}
              />
              Euro
            </label>
          </div>
          {errors.current && <p className="red">Please, choose current</p>}
        </div>
        <div className="form">
          <label htmlFor="radio">Describe the offer:</label>
          <textarea
            id="radio"
            rows={4}
            placeholder="We are wait you..."
            {...register('inputDescription', {
              required: true,
              minLength: 7,
              validate: (value) => value[0].toUpperCase() === value[0],
            })}
          />
          {errors.inputDescription?.type === 'required' && (
          <div className="red">Please, enter the describe</div>)}
          {errors.inputDescription?.type === 'minLength' && (
            <div className="red">Enter more symbols</div>)}
          {errors.inputDescription?.type === 'validate' && (
            <div className="red">Use the first letter as upper</div>)}
        </div>
        <div className="form">
          <div className="form">
            <label htmlFor="radio">I agree to the processing of personal data</label>
            <input
              type="checkbox"
              className="input-checkbox"
              {...register('inputCheckbox', {
                required: true,
              })}
            />
            {errors.inputCheckbox?.type === 'required' && (
            <div className="red">Please give your concert!</div>)}
          </div>
        </div>
        <div className="form">
          <label htmlFor="submit">
            <button type="submit" value="Submit" className="form__btn">Submit</button>
          </label>
        </div>
      </form>
      {successMsg && <p className="red font">{successMsg}</p>}
    </div>
  );
};
