import React from 'react';

const location = () => {
  return(
    <div>
    <label>Targetted Location</label>
    <div className="input-field">
        <input type="text" id="region" className="selectRegion" />
        <label htmlFor="region">Select Region(s)</label>
    </div>
    </div>
  )
}

export default location;
