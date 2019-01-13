import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import './style.sass';

import Header from 'components/Header';
import Footer from "components/Footer";
import UserList from 'containers/UserListContainer';
import PostList from 'containers/PostListContainer';
import Organization from 'containers/OrganizationContainer';

class App extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <UserList />
                <PostList />
                <Organization />
                <Footer />
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));