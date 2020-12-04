import React from 'react';
import { useSelector } from 'react-redux';

import {IBeerArray, IState} from "types"
import './BeerList.css';

const ListItem: React.FC<any> = () => {
const isPulled =  useSelector((state: IState<IBeerArray>) => state.beer.isPulled);

  return (
    <p className="h3">
      {isPulled ? 'Not found beer, try again' : 'Use above input for fetch beer'}
    </p>
  );
};

export default ListItem;
