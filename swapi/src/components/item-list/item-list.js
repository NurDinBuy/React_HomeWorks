import React, { useState, useEffect, useContext } from 'react';
import {Consumer} from '../swapi-context';
import './item-list.css';


const ItemList = ({ setSelectedItemId }) => {
  const [data, setData] = useState([]);
  const swapi = useContext(Consumer)

  useEffect(() => {
    swapi.getAllPeople()
      .then(data => setData(data))
      .catch(error => error)
  }, [])

  const elements = data.map((person) => {
    return (<li
      key={person.id}
      className="list-group-item"
      onClick={() => setSelectedItemId(person.id)}
    >
    {person.name}
    </li>)
  })

  return (
    <ul className="item-list list-group">{elements}</ul>
  );
}

export default ItemList;
