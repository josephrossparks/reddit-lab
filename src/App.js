import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './components/PostList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList posts={this.props.posts}/>
      </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        isLoading: state.isLoading,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);
