import React, { PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.sass';

import Navigation from 'components/Navigation/Navigation.jsx';

import routes from './routes';
import Filters from './components/Filters/Filters';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className='left_col'>
                        <Filters />
                    </div>
                    <div className="content">
                        <Navigation />
                        <Switch>
                            {routes.map((page, id) => <Route key={id} {...page} />)}
                        </Switch>
                    </div>
                    <div className='rigth_col'>
                    </div>
                </Fragment>
            </BrowserRouter>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));