import React from 'react'
import withSwapi from '../hoc'
import { ItemDetails, Record } from '../item-details'

const PersonDetails = (props) => {

  return (
    <ItemDetails {...props}>
      <Record label='Gender' fieldName='gender' />
      <Record label='Eye color' fieldName='eyeColor' />
      <Record label='Birth year' fieldName='birthYear' />
    </ItemDetails>
  )
}

const divideFunc = (swapi) => ({
  getData: swapi.getPerson,
  getImage: swapi.getPersonImage
})

export default withSwapi(PersonDetails, divideFunc)