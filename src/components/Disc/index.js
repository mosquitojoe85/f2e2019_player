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
          <div key="line1" className="discLine1" />,
          <div key="line2" className="discLine2" />,
          <div key="line3" className="discLine3" />,
        ] : null
      }
    </div>
  );
}

export default Disc;
