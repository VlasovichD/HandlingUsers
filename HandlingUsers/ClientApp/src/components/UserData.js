import React from 'react';

export default ({ user, update, index }) => {
    return (
        <tr onClick={() => update({ active: index })}>
            <td><img
                //src={user.avatar}
                //src={`images/${user.image}.svg`}
                src={`images/9525.jpg`}
                className="img"
                alt=" "
                
            /></td>
            <td>{user.name}</td>
        </tr>
    );
};
