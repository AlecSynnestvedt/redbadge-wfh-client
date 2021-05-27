import React from 'react';
import Comments from './components/comments';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <p>WFH</p>
        <Comments />
      </div>
    </div>
  );
}

export default App;
