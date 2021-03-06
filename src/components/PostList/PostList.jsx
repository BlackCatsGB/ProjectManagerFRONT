import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends PureComponent {
    render() {
        const { posts, onLoadMorePublications } = this.props;

        return (
            <div className="posts_list container">
                <ul>
                    {posts.map(post =>
                        <li key={post.id}>
                            <h1><Link to={`/projects/${post.id}`}>{post.title}</Link></h1>
                        </li>
                    )}
                </ul>
                <button className="btn btn-secondary" onClick={onLoadMorePublications}>Больше публикаций</button>
            </div>
        );
    }
};