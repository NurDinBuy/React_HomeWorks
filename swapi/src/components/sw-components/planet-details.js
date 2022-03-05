import React from 'react'
import withSwapi from '../hoc'
import { ItemDetails, Record } from '../item-details'

const PlanetDetails = (props) => {

  return (
    <ItemDetails {...props}>
      <Record label='Population:' fieldName='population' />
      <Record label='Rotation Period:' fieldName='rotationPeriod' />
      <Record label='Diameter:' fieldName='diameter' />
    </ItemDetails>
  )
}

const divideFunc = (swapi) => ({
  getData: swapi.getPlanet,
  getImage: swapi.getPlanetImage
})

export default withSwapi(PlanetDetails, divideFunc)