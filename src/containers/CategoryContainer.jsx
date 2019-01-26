import React, { PureComponent, Fragment } from 'react';

import Category from 'components/Category';

const testCategories = [
    {
        id: 1,
        title: 'Аутентификация'
    },
    {
        id: 2,
        title: 'Шифрование'
    },
    {
        id: 3,
        title: 'Журналирование'
    },
    {
        id: 4,
        title: 'web-develop'
    }
];

export default class CategoryContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            categories: []
        };
    }

    componentDidMount() {
        this.setState({
            loading: false,
            categories: testCategories
        })
    }

    render() {
        const { loading, categories } = this.state;

        return (
            <Fragment>
                {loading ? <div>Секундочку, идёт загрузка...</div> : <Category categories={ categories } />}
            </Fragment>


        );
    }
}