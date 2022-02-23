import React, { useState, useEffect, useContext } from 'react';
import {Consumer} from '../swapi-context';
import './person-details.css';


const PersonDetails = ({ selectedItemId }) => {
  const [data, setData] = useState({})
  const swapi = useContext(Consumer);

  useEffect(() => {
    swapi.getPerson(selectedItemId)
      .then(data => setData(data))
      .catch(error => error)
  }, [selectedItemId])

  const {id, name, gender, birthYear, eyeColor} = data
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

  return (
    <div className="person-details card">
      <img className="person-image" src={imageUrl} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PersonDetails;
