import React from 'react';
import disc from './assets/disc.jpg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main className="playerBlock">
        <div className="top">
          <div className="disc">
            <img alt="disc image" src={disc} />
            <div className="discCover"></div>
          </div>
          <div className="actBTnBlock"></div>
        </div>
        <div className="bottom"></div>
      </main>
    </div>
  );
}

export default App;
