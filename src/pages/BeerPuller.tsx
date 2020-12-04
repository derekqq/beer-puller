import React from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import BeerList from '../components/BeerList/BeerList';

const BeerPuller: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <SearchBox />
        </div>
        <div className="col-12">
          <BeerList />
        </div>
      </div>
    </div>
  );
};

export default BeerPuller;
