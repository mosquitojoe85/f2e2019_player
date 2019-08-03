import React from 'react';
import './index.scss';
import pinIcon from '../../assets/player.svg';
import playIcon from '../../assets/play2.svg';
import stopIcon from '../../assets/stop2.svg';

function PlayBtn({ play, playAct, stopAct }) {
  return (
    <div className="playBtnBlock">
      <div className={`pin ${play ? '' : 'stopPin'}`}><img src={pinIcon} alt="pin" /></div>
      <button className="playBtn" onClick={play ? stopAct : playAct}>
        <img src={play ? stopIcon : playIcon} alt="play icon" />
      </button>
      <div className="playBtnShadow" />
    </div>
  );
}

export default PlayBtn;
