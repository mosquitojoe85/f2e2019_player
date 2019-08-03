import React from 'react';
import disc from './assets/disc.jpg';
import './App.scss';
import Button from './components/Button';
import next from './assets/next.svg';

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
            <Button icon={next} act={() => {}} />
          </div>
        </div>
        <div className="bottom"></div>
      </main>
    </div>
  );
}

export default App;
