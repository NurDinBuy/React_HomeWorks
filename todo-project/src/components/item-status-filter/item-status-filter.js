import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({switchStatus}) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-info"
        onClick={() => switchStatus('all')}
      >All</button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => switchStatus('active')}
      >Active</button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => switchStatus('done')}
      >Done</button>
    </div>
  );
};

export default ItemStatusFilter;
