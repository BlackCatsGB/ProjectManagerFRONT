import React, { PureComponent, Fragment } from 'react';

import Source from 'components/Source';

const testSources = [
    {
        id: 1,
        title: 'ФЗ-152'
    },
    {
        id: 2,
        title: 'ФЗ-63'
    },
    {
        id: 3,
        title: 'ПП-1119'
    }
];

export default class SourceContainers extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading:true,
            sources: []
        }
    }

    componentDidMount() {
        this.setState({
            loading: false,
            sources: testSources
        })
    }

    render() {
        const { loading, sources } = this.state;

        return (
            <Fragment>
                {loading ? <div>Секундочку, идёт загрузка...</div> : <Source sources={sources} />}
            </Fragment>
        )
    }
}