import React, { Component } from 'react';

class Post extends Component {

    render() {
        const post = this.props.post;
        
        // encodeURIComponent makes a string safe to include in a URL since some
        // characters are not allowed in URLs or need to be modified.
        return (
            <div className='PostContainer'>
                <img className='PostImage' src={post.data.thumbnail} />
                <p>{post.data.title}</p>
            </div>
        );
    }

}

export default Post;
