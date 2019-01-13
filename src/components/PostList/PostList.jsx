import React, { PureComponent } from 'react';

import './posts.sass';

export default class PostList extends PureComponent {
    render() {
        const { posts, onLoadMorePublications } = this.props;

        return (
            <div className="posts_list container">
                <ul>
                    {posts.map(post =>
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                        </li>
                    )}
                </ul>
                <button className="white_button" onClick={onLoadMorePublications}>Больше публикаций</button>
            </div>
        );
    }
};