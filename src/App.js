import React, { useState } from 'react';
import MultiSlider, { Progress, Dot } from 'react-multi-bar-slider';
import './App.scss';
import Button from './components/Button';
import PlayBtn from './components/PlayBtn';
import Disc from './components/Disc';
import next from './assets/next.svg';
import group from './assets/group.svg';
import sound from './assets/sound.svg';
import music from './assets/This_is_a_Jazz_Space.mp3';

const sliderStyle = { border: '3px solid black', borderRadius: 9 };
const progressStyle = { borderRadius: 9, height: 8 };
const dotStyle = { border: '3px solid black', borderRadius: 0, height: 18, width: 8 };

function App() {
  // const [currentTrack, setCurrentTrack] = useState(null);
  const [status, setStatus] = useState('stop');
  let audioPlayer = React.createRef();

  const handlePlay = () => {
    audioPlayer.current.src = music;
    audioPlayer.current.play();
    setStatus('play');
  }

  const handleStop = () => {
    audioPlayer.current.pause();
    setStatus('stop');
  }

  return (
    <div className="App">
      <main className="playerBlock">
        <div className="top">
          <Disc play={status === 'play'} />
          <div className="actBTnBlock">
            <div>
              <Button icon={next} act={() => {console.log("m")}} />
              <Button icon={next} act={() => {console.log("m")}} />
            </div>
            <div>
              <Button icon={group} act={() => {console.log("m")}} />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="line1">
            <div className="left">
              <h1>This is a Jazz Space</h1>
              <h2>Midnight North</h2>
            </div>
            <div className="center">
              <PlayBtn play={status === 'play'} playAct={handlePlay} stopAct={handleStop} />
            </div>
            <div className="right">
              <MultiSlider
                onSlide={()=>{}}
                style={sliderStyle}
              >
                <Progress color="#C5C5C5" progress={40} height={1} style={progressStyle}>
                  <Dot color="#fff" style={dotStyle} />
                </Progress>
              </MultiSlider>
              <div className="soundIcon"><img src={sound} alt="sound icon" /></div>
            </div>
          </div>
          <div className="line2">
            <div className="timeLabel">00:00</div>
            <MultiSlider
              onSlide={()=>{}}
              style={sliderStyle}
            >
              <Progress color="#C5C5C5" progress={40} height={1} style={progressStyle}>
                <Dot color="#fff" style={dotStyle} />
              </Progress>
            </MultiSlider>
            <div className="timeLabel">00:00</div>
          </div>
        </div>
        <audio ref={audioPlayer} />
      </main>
    </div>
  );
}

export default App;
