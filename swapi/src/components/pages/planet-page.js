import React, { useState } from 'react';
import Row from '../row'
import { PlanetDetails, PlanetList } from '../sw-components';


const PlanetPage = () => {
  const [selectedItemId, setSelectedItemId] = useState(2)

  const leftElement = <PlanetList setSelectedItemId={setSelectedItemId} />

  const rightElement = <PlanetDetails selectedItemId={selectedItemId} />

  return <Row left={leftElement} right={rightElement} />
}


export default PlanetPage;
