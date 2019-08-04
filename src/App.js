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
const getTime = time => {
  if(!isNaN(time)) {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackTime: [0, 0],
      status: 'stop',
    };
    this.audioPlayer = new Audio;
  }

  componentDidMount() {
    this.audioPlayer.addEventListener("timeupdate", e => {
      this.setState({
        trackTime: [e.target.currentTime, e.target.duration],
      });
    });
  }

  handlePlay = () => {
    this.audioPlayer.src = music;
    this.audioPlayer.play();
    this.setState({ status: 'play' });
  }

  handleStop = () => {
    this.audioPlayer.pause();
    this.setState({ status: 'stop' });
  }

  handleSlider = (v) => {
    this.audioPlayer.currentTime = v/100*this.state.trackTime[1];
  };

  render() {
    const { status, trackTime } = this.state;
    return (
      <div className="App">
        <main className="playerBlock">
          <div className="top">
            <Disc play={status === 'play'} />
            <div className="actBTnBlock">
              <div>
                <Button icon={next} act={() => {}} />
                <Button icon={next} act={() => {}} />
              </div>
              <div>
                <Button icon={group} act={() => {}} />
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
                <PlayBtn play={status === 'play'} playAct={this.handlePlay} stopAct={this.handleStop} />
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
              <div className="timeLabel">{getTime(trackTime[0])}</div>
              <MultiSlider
                onSlide={this.handleSlider}
                style={sliderStyle}
                readOnly={status !== 'play'}
              >
                <Progress color="#C5C5C5" progress={trackTime[0]/trackTime[1]*100} height={1} style={progressStyle}>
                  <Dot color="#fff" style={dotStyle} />
                </Progress>
              </MultiSlider>
              <div className="timeLabel">{getTime(trackTime[1])}</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}

export default App;
