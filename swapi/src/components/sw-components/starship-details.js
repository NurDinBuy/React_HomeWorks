import React from 'react'
import withSwapi from '../hoc'
import { ItemDetails, Record } from '../item-details'

const StarshipDetails = (props) => {

  return (
    <ItemDetails {...props}>
      <Record label='Model:' fieldName='model' />
      <Record label='Cost in credits:' fieldName='costInCredits' />
      <Record label='Length:' fieldName='length' />
      <Record label='Passengers:' fieldName='passengers' />
    </ItemDetails>
  )
}

const divideFunc = (swapi) => ({
  getData: swapi.getStarship,
  getImage: swapi.getStarshipImage
})

export default withSwapi(StarshipDetails, divideFunc)