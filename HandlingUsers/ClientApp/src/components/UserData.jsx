import React from 'react';

export default ({ user, update, index }) => {
    return (
        <tr onClick={() => update({ active: index })}>
            <td><img src={user.avatar} className="user-image" /></td>
            <td>{user.name}</td>
        </tr>
    );
};
