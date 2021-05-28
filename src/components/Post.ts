import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    }
  }
}


/*
class Post extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {

    }
  }
  render() {
    return null;
  }
}

export default Post;

*/