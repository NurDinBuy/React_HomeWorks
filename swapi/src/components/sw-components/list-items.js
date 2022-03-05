import React from "react"
import ItemList from "../item-list"
import withSwapi from "../hoc"


// const PeopleList = (props) => {
//   return (
//     <ItemList {...props}>
//       {(item) => item.name}
//     </ItemList>
//   )
// }

// const dividePeopleFunc = (swapi) => ({
//   getData: swapi.getAllPeople
// })

const withChildrenFunc = (Component) => {
  return (props) => {
    return <Component {...props} {...props.children}>{(item) => item.name}</Component>
  }
}

export const PeopleList = withSwapi(
  withChildrenFunc(ItemList),
  (swapi) => ({
    getData: swapi.getAllPeople
  })
)

export const PlanetList = withSwapi(
  withChildrenFunc(ItemList),
  (swapi) => ({
    getData: swapi.getAllPlanets
  })
)

export const StarshipList = withSwapi(
  withChildrenFunc(ItemList),
  (swapi) => ({
    getData: swapi.getAllStarships
  })
)
