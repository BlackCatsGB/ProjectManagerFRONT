import React, { PureComponent } from 'react';

export default class UserList extends PureComponent {
    render() {
        const { users } = this.props;

        return (
            <div className="user_list">
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            {user.name}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
};