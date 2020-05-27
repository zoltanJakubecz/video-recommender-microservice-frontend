import React from 'react';
import './App.css';
import VideoList from './components/VideoList';
import { VideoProvider } from './contexts/VideoContext';

function App() {
  return (
    <div className="App">
      <VideoProvider >
        <VideoList />
      </VideoProvider>
    </div>
  );
}

export default App;
