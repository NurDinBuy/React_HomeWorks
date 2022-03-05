import React, { useState } from 'react';
import { PeopleList, PersonDetails } from '../sw-components'
import Row from '../row'


const PeoplePage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)

  const leftElement = <PeopleList setSelectedItemId={setSelectedItemId} />
  const rightElement = <PersonDetails selectedItemId={selectedItemId} />

  return <Row left={leftElement} right={rightElement} />
}


export default PeoplePage;
