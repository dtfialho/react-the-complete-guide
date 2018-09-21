import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({posts: res.data});
      });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)} />;
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost id={this.state.selectedPostId} />
        </section>
      </div>
    );
  }
}

export default Blog;
