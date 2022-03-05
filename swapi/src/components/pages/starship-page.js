import React, { useState } from 'react';
import Row from '../row'
import { StarshipDetails, StarshipList } from '../sw-components'


const StarshipPage = () => {
  const [selectedItemId, setSelectedItemId] = useState(10)

  const leftElement = <StarshipList setSelectedItemId={setSelectedItemId} />
  const rightElement = <StarshipDetails selectedItemId={selectedItemId} />

  return <Row left={leftElement} right={rightElement} />
}


export default StarshipPage;
