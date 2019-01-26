import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

class Navigation extends PureComponent {
    render() {

        const { location } = this.props;

        return (
            <ul className="nav nav-tabs" id="myTab" role="tablist" >
                <li className='nav-item'>
                    <Link className={classNames('nav-item', { active: location.pathname === '/projects' })} id="home-tab" data-toggle="tab" to="/projects" role="tab" aria-controls="home" aria-selected="true">Источники</Link>
                </li>
                <li className={classNames('nav-item', { active: location.pathname === '/users' })}>
                    <Link to="/users" className="nav-link">Список</Link>
                </li>
                <li className={classNames('nav-item', { active: location.pathname === '/organization' })}>
                    <Link to="/organization" className="nav-link">Версии</Link>
                </li>
                <li className={classNames('nav-item', { active: location.pathname === '/labels' })}>
                    <Link to="/labels" className="nav-link">Метки</Link>
                </li>
            </ul>
        );
    }
}

export default withRouter(Navigation);