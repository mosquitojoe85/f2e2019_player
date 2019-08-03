import React from 'react';

import './index.scss';

function Button({ icon, act }) {
  return (
    <div className="btnWrapper btn">
      <div className="btnShadow"></div>
      <button onClick={act}><img src={icon} alt="btn icon" /></button>
    </div>
  );
}

export default Button;
