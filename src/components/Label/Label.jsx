import React, { PureComponent } from 'react';

export default class Label extends PureComponent {
    render() {

        const { labels } = this.props;

        return (
            <div className="nav-item">
                <h5>Метки</h5>
                {labels.map(label => <button key={label.id} className='filter btn btn-outline-secondary'>{label.title}</button>)}
            </div>
        );
    }
}