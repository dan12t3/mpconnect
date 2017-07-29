import React from 'react';
import './page.css';

const page = (props) => {
  return(
    <div className="accountView">
      {props.children}
    </div>
  );
}

export default page;
