import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setBeers } from 'slices/beerSlice';
import {getByName} from 'helpers/api';

const debounce = require('lodash.debounce');

const SearchBox: React.FC = () => {
  const [draft, setDraft] = useState('');
  const [result, setResult] = useState('');

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const fetchData = async(name: string) => {
    const fetchedBeers = await getByName(name);
    dispatch(setBeers(fetchedBeers));
    setResult(name);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraft(e.target.value);
    fetchData(e.target.value);
  }

  const onSubmit = () => {
    fetchData(draft);
    setDraft('');
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="draft">Type your beer name</label>
      <div className="d-flex">
        <input
          
          onChange={debounce(handleChange,100)}
          type="text"
          className="form-control"
          id="draft"
          name="draft"
          ref={register({ required: true, minLength: 1 })}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
    {errors.draft && <p className="text-danger mt-1">This field is required</p>}
    {result.length>0 && <p className="h3">Result for <strong>{result}</strong></p>}
    </>
  );
};

export default SearchBox;
