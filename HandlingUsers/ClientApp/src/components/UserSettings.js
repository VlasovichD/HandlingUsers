import React from 'react';
import './site.css';

export default ({ user, update, index }) => {

    return <div>
        <span>Enable</span>
        <label className="switch">
            <input type="checkbox"
            //onChange={() => update((this.user.enabled === true) ? this.user.enabled = false : this.user.enabled = true)}
            />
            <span className="slider round"></span>
        </label>
    </div>
}