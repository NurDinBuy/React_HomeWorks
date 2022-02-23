import React, {useState} from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


const PeoplePage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList setSelectedItemId={setSelectedItemId} />
      </div>
      <div className="col-md-6">
        <PersonDetails selectedItemId={selectedItemId} />
      </div>
    </div>
  )
}


export default PeoplePage;
