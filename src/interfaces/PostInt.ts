interface Post {
  title: string;
  content: string;
  setTimeOfPost(d: Date);
}

class Posts implements Post {
  title: 'Headline';
  content: 'mic check mic check one two one two';

  setTimeOfPost(d: Date) {
    console.log('Posted on ', d);
  }
}

let myPost: Posts = new Posts();
myPost.setTimeOfPost(new Date(Date.now()));
