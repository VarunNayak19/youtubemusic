import './App.css';
import React from 'react'
import ReactPlayer from 'react-player'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './views/landingPage/landingPage';
import Results from './views/results/results';
import Player from './views/player/player';
function App() {
  return (
    <div className="App">
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="100vh" controls /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/player" element={<Player />} />
      </Routes>

    </div>
  );
}

export default App;
