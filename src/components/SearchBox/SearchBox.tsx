import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setBeers } from 'slices/beerSlice';
import {getByName} from 'helpers/api'


const SearchBox: React.FC = () => {
  const [beerName, setBeerName] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBeerName(e.target.value);
  }

  const onSubmit = async () => {
    const fetchedBeers = await getByName(beerName);
    dispatch(setBeers(fetchedBeers));
    setBeerName('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="beerName">Type your beer name</label>
      <div className="d-flex">
        <input
          value={beerName}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="beerName"
          name="beerName"
          ref={register({ required: true, minLength: 1 })}
        />
        {errors.beerName && <p className="text-danger mt-1">This field is required</p>}

        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
