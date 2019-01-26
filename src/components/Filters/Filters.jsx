import React, { PureComponent, Fragment } from 'react';

import Category from 'containers/CategoryContainer';
import Label from 'containers/LabelContainer';
import Source from 'containers/SourceContainers';

export default class Filters extends PureComponent {
    render() {

        return (
            <Fragment>
            <div className="navi">
                <Category />
                <Label />
                <Source />

            </div>
        </Fragment>
        );
    }
}