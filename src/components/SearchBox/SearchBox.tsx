import React from 'react';
import { useForm } from 'react-hook-form';
import useFetchBeer from '../../hooks/useFetchBeer';



const SearchBox: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const { draft, result, onSubmit, handleChange } = useFetchBeer();

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="draft">Type your beer name</label>
      <div className="d-flex">
        <input
          value={draft}
          onChange={handleChange}
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
