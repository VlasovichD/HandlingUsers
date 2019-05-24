import React from 'react';
import UserData from './UserData';
import './UserList.css';

export default ({ data, update }) => {
    if (!data) { return (<p>Loading...</p>); }

    const users = data.map((user, index) => {
        return (<UserData user={user} index={index} key={user.id} update={update} />);
    });

    return (
        <table className="list-group table" id="sidebar-list">
            <tbody>
                {users}
            </tbody>
        </table>
    );
};