import React from 'react';
import './BeerList.css';

const ListItem: React.FC<any> = ({ item: {id, name, description, abv, image_url}}) => {
  return (
    <tr>
      <th className="text-dark" scope="row">
        {id + 1}
      </th>
      <td className="text-dark">{name}</td>
      <td className="text-dark">{description}</td>
      <td className="text-dark">
        <img className="image" src={image_url} alt=""/>
      </td>
      <td className="text-dark">{abv}</td>
    </tr>
  );
};

export default ListItem;
