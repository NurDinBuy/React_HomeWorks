import React from 'react'
import MyContext from '../swapi-context/context';

const withSwapi = (Component, divideFunc) => {
  return (props) => {
    return (
      <MyContext.Consumer>
        {
          (swapi) => {
            const methods = divideFunc(swapi)
            return <Component {...methods} {...props} />
          }
        }
      </MyContext.Consumer>
    )
  }
}

export default withSwapi;