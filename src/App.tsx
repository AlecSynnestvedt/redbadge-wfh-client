import React from 'react';
import Comments from './components/Comments';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <p>WFH</p>
        <Navbar />
        <Home />
        <Comments />
      </div>
    </div>
  );
}

export default App;