import React from 'react';

const description = () => {
  return(
    <div className="input-field">
      <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
      <label htmlFor="textarea1">Tell us a bit about your store!</label>
    </div>
  );
}

export default description;
