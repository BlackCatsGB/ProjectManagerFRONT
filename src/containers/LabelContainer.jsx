import React, { PureComponent, Fragment } from 'react';

import Label from 'components/Label';

const testLabels = [
    {
        id: 1,
        title: 'ИСПДн'
    },
    {
        id: 2,
        title: 'PCI DSS'
    },
    {
        id: 3,
        title: 'КИ'
    }
];

export default class LabelContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            labels: []
        };
    }

    componentDidMount() {
        this.setState({
            loading: false,
            labels: testLabels
        })
    }

    render() {
        const { loading, labels } = this.state;

        return (
            <Fragment>
                {loading ? <div>Секундочку, идёт загрузка...</div> : <Label labels={labels} />}
            </Fragment>
        );
    }
}