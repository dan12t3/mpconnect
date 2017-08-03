import React from 'react';

const sex = () => {
  return(
    <div>
    <label>Targetted Sex</label>
    <p>
      <input name="targetSex" type="radio" id="sex3" />
      <label htmlFor="sex3">Both</label>
    </p>
    <p>
      <input name="targetSex" type="radio" id="sex1" />
      <label htmlFor="sex1">Male</label>
    </p>
    <p>
      <input name="targetSex" type="radio" id="sex2" />
      <label htmlFor="sex2">Female</label>
    </p>
    </div>
  );
}

export default sex;
