import React, { useState, useEffect } from 'react';
import withSwapi from '../hoc';
import './item-list.css';


const ItemList = ({ setSelectedItemId, getData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then(data => setData(data))
      .catch(error => error)
  }, [])

  const elements = data.map((item) => {
    return (<li
      key={item.id}
      className="list-group-item"
      onClick={() => setSelectedItemId(item.id)}
    >
      {/* {children(person)} */}
      {item.name}
    </li>)
  })

  return (
    <ul className="item-list list-group">{elements}</ul>
  );
}

const divideFunc = (swapi) => ({
  getData: swapi.getAllPeople,
})

export default withSwapi(ItemList, divideFunc)