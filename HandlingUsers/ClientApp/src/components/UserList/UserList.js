import React from 'react';
import UserData from './UserData';
import './UserList.css';

export default ({ data, update }) => {

    const users = data.users.map((user, index) => {
        return (<UserData
            user={user}
            active={data.active}
            index={index}
            key={user.id}
            update={update}
        />);
    });

    return (
        <div>
            {data.isLoading ? <span>Loading...</span> : []}
            <table className="list-group table sidebar-list">
                <tbody>
                    {users}
                </tbody>
            </table>
        </div>
    );
};