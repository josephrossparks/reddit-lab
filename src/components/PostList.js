import React, { Component } from 'react';
import Post from './Post.js';

class PostList extends Component {

    render() {
        return (
            <div className="PostList">

            	{this.props.posts.map(post =>
                    <Post key={post.url} post={post} />
                )}
                
            </div>
        );
    }

}

export default PostList;