import React, { PureComponent } from 'react';

export default class Category extends PureComponent {
    render() {

        const { categories } = this.props;

        return (
            <div className="nav-item">
                <h5>Категории требований</h5>
                {categories.map(category => <button key={category.id} className='filter btn btn-outline-secondary'>{category.title}</button>)}
            </div>
        );
    }
}