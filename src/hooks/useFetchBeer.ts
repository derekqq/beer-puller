import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBeers } from 'slices/beerSlice';
import { getByName } from 'helpers/api';
const debounce = require('lodash.debounce');

const useFetchBeer = () => {
  const dispatch = useDispatch();
  const [draft, setDraft] = useState('');
  const [result, setResult] = useState('');

  const fetchData = debounce(async (name: string) => {
    const fetchedBeers = await getByName(name);
    dispatch(setBeers(fetchedBeers));
    setResult(name);
  }, 100);

  useEffect(() => {
    if (draft.length > 0) fetchData(draft);

    return () => fetchData.cancel();
  }, [draft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraft(e.target.value);
  };

  const onSubmit = () => {
    fetchData(draft);
    setDraft('');
  };

  return { draft, result, onSubmit, handleChange };
};

export default useFetchBeer;
