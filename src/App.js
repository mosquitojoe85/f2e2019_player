import React from 'react';
import MultiSlider, { Progress, Dot } from 'react-multi-bar-slider';
import disc from './assets/disc.jpg';
import './App.scss';
import Button from './components/Button';
import next from './assets/next.svg';
import group from './assets/group.svg';
import sound from './assets/sound.svg';
import pin from './assets/player.svg';
import play from './assets/play2.svg';

const sliderStyle = { border: '3px solid black', borderRadius: 9 };
const progressStyle = { borderRadius: 9, height: 8 };
const dotStyle = { border: '3px solid black', borderRadius: 0, height: 18, width: 8 };

function App() {
  return (
    <div className="App">
      <main className="playerBlock">
        <div className="top">
          <div className="discBlock">
            <div className="disc">
              <img alt="disc image" src={disc} />
              <div className="discCover"></div>
            </div>
            <div className="discLine1" />
            <div className="discLine2" />
            <div className="discLine3" />
          </div>
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
              <h1>黑色幽默</h1>
              <h2>周杰倫</h2>
            </div>
            <div className="center">
              <div className="playBtnBlock">
                <div className="pin"><img src={pin} alt="pin" /></div>
                <button className="playBtn"><img src={play} alt="play icon" /></button>
                <div className="playBtnShadow" />
              </div>


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
      </main>
    </div>
  );
}

export default App;
