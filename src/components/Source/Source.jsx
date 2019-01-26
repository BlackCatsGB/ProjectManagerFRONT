import React, { PureComponent } from 'react';

export default class Source extends PureComponent {
    render() {

        const { sources } = this.props;

        return (
            <div className="nav-item">
                <h5>Документы (источники)</h5>
                {sources.map(source => <button key={source.id} className='filter btn btn-outline-secondary'>{source.title}</button>)}
            </div>
        );
    }
}