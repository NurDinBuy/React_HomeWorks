import React, { useState, useEffect } from 'react';
import './item-details.css';

const Record = ({ label, fieldName, data }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[fieldName]}</span>
    </li>
  )
}

const ItemDetails = ({ selectedItemId, getData, getImage, children }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    getData(selectedItemId)
      .then(data => setData(data))
      .catch(error => error)
  }, [selectedItemId])

  const { id, name, gender, birthYear, eyeColor } = data
  const imageUrl = getImage(id)

  return (
    <div className="item-details card">
      <img className="item-image" src={imageUrl} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">

          {
            React.Children.map(children, (record) => {
              return React.cloneElement(record, { data: data })
            })
          }

        </ul>
      </div>
    </div>
  )
}

export { ItemDetails, Record };
