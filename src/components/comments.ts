import React from 'react';

class Comments extends React.Component<{},{}> {
  constructor(props:{}) {
    super(props)
      this.state = {
        content: '', 
        postId: '',
        userId: ''
      }
  }

//   render() {
//     return null;
//   }
// }

incrementCount = () => {
  console.log("incrementing...");
  this.setState(
    { count: this.state.count +1}
  );
};

decrementCount = () => {
  console.log("decrement called");
  this.setState(
    { decrementCount: this.state.decrementCount -1}
  );
};

render () {
  console.log("render called");
  return (
    <div className="main">
      <div className="mainDiv">
        <hr />
          <h3>Smash that like button!</h3>
          <button onClick={this.incrementCount}>
            Likes: {this.state.count}
          </button>
          <h3>Shmoosh that dislike button?</h3>
          <button onClick={this.incrementCount}>
            Anti-likes: {this.state.count}
          </button>
          <ClassComponentNotes />
      </div>
    </div>
  );
}
}


export default Comments;

//CLASS COMPONENT DEMO

/*
import React, { Component } from 'react';

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
}

incrementCount = () => {
  console.log("increment called");
  this.setState(
    { count: this.state.count +1}
  );
};

decrementCount = () => {
  console.log("decrement called");
  this.setState(
    { decrementCount: this.state.decrementCount -1}
  );
};

render () {
  console.log("render called");
  return (
    <div className="main">
      <div className="mainDiv">
        <hr />
          <h3>Smash that like button!</h3>
          <button onClick={this.incrementCount}>
            Likes: {this.state.count}
          </button>
          <h3>Shmoosh that dislike button?</h3>
          <button onClick={this.incrementCount}>
            Anti-likes: {this.state.count}
          </button>
          <ClassComponentNotes />
      </div>
    </div>
  );
}
}

const ClassComponentNotes = function () {
    return (
    <div>
      <h1>Class Components</h1>

      <p>Class components are considered the "react way" of writing components.</p>
      <dl>
        <dt>ES6 JS Classes</dt>
        <dd>Built on these, must understand them.</dd>
        <dt>must extend Comonent</dt>
        <dd>Class components need to extend the React component</dd>
        <dt>render()</dt>
        <dd>Class components always have a render method.</dd>
        <dt>ecport</dt>
        <dd>Only one class component exported per file.</dd>
      </dl>
    </div>
  );
};
*/