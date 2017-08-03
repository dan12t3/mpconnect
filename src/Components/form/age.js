import React from 'react';

const age = () => {
  return(
    <div>
    <label>Targetted Age</label>
    <p>
    <input type="checkbox" id="age1" />
    <label htmlFor="age1">less than 18</label>
    </p>
    <p>
    <input type="checkbox" id="age2" />
    <label htmlFor="age2">18 - 25</label>
    </p>
    <p>
    <input type="checkbox" id="age3" />
    <label htmlFor="age3">26 to 45</label>
    </p>
    <p>
    <input type="checkbox" id="age4" />
    <label htmlFor="age4">45 - 55</label>
    </p>
    <p>
    <input type="checkbox" id="age5" />
    <label htmlFor="age5">greater than 55</label>
    </p>
    </div>
  );
}

export default age;
