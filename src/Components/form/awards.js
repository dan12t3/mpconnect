import React from 'react';

const award = () => {
  return(
    <div>
    <label>Award Winning Products</label>
    <div className="row">
    <div className="input-field col s6">
        <input type="text" id="selectProduct" className="selectProduct" />
        <label htmlFor="selectProduct">Select Product(s)</label>
    </div>
    <div className="input-field col s6">
      <input type="text" id="productAwards" />
      <label htmlFor="productAwards">Award(s)</label>
    </div>
  </div>
  </div>
  );

}

export default award;
