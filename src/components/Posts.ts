import React from 'react';
import Post from './Post';

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = { 
      listOfPosts: []
    };
  }
  componentDidMount() {}
  render() {
    return (
        <Post listOfPosts={this.state.postlist} />
    );
  }
}
