import React from 'react';

const full = () => {
  return(
    <div>
    <label>Estimated Fulfilment Time (200+ orders)</label>
    <p>
      <input name="fulfilmentTime" type="radio" id="ftime1" />
      <label htmlFor="ftime1">less than 7 days</label>
    </p>
    <p>
      <input name="fulfilmentTime" type="radio" id="ftime2" />
      <label htmlFor="ftime2">7 - 14 days</label>
    </p>
    <p>
      <input name="fulfilmentTime" type="radio" id="ftime3" />
      <label htmlFor="ftime3">15 - 21 days</label>
    </p>
    <p>
      <input name="fulfilmentTime" type="radio" id="ftime4" />
      <label htmlFor="ftime4">greater than 21 days</label>
    </p>
    </div>
  );
}

export default full;
