import React from 'react';
import { useSelector } from 'react-redux';

import {IBeerArray, IState} from "types"

import BeerListItem from './BeerListItem';
import BeerNotFound from './BeerNotFound';

const BeerList: React.FC = () => {
  const beersList = useSelector((state: IState<IBeerArray>) => state.beer.beers);

  return (
    <table className="table table-striped table-borderless">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Image</th>
          <th scope="col">abv</th>
        </tr>
      </thead>
      <tbody>
        {beersList.length > 0 && beersList.map((item) => (
          <BeerListItem key={item.id} item={item} />
        ))}
      </tbody>
      {beersList.length === 0 && <BeerNotFound/>}
    </table>
  );
};

export default React.memo(BeerList);
