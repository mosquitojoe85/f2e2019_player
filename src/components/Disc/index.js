import React from 'react';
import './index.scss';
import disc from '../../assets/disc.jpg';

function Disc({ play }) {
  return (
    <div className="discBlock">
      <div className="disc">
        <img className={play ? 'play' : ''} alt="disc cover" src={disc} />
        <div className="discCover"></div>
      </div>
      {play ?
        [
          <div className="discLine1" />,
          <div className="discLine2" />,
          <div className="discLine3" />,
        ] : null
      }
    </div>
  );
}

export default Disc;
