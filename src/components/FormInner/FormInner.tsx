/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormCard } from '../types';
import './FormInnerStyles.css';

interface IProps {
  addNewCard: (card: IFormCard) => void;
}

export const FormInner = ({ addNewCard }: IProps) => {
  const [successMsg, setSuccessMsg] = useState('');
  // const [selectedFile, setSelectedFile] = useState({});
  let newPathFile: string;
  const changeHandler = (event: any) => {
    const pathFile = event.target.files[0];
    newPathFile = URL.createObjectURL(pathFile);
    console.log(newPathFile);
    // setSelectedFile(newPathFile);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
    data.inputImage = newPathFile;
    console.log(data.current);
    addNewCard(data);
    setSuccessMsg('Card is done!');
    reset();
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
              {errors.inputCurDol?.type === 'required' && (
              <div className="red">Please, choose</div>)}
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
            {errors.current && <p className="red">!!!!</p>}
          </div>
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
        {successMsg && <p className="red">{successMsg}</p>}

      </form>
    </div>
  );
};
