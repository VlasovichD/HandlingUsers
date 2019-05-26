import React from 'react';
import './site.css';

export class UserSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            isUpdated: false,
        };

        this.handleChange = this.handleChange.bind(this);
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    //handleChange(event) {
    //    const { name, value } = event.target;
    //    const { user } = this.state;
    //    this.setState({
    //        user: {
    //            ...user,
    //            [name]: !value
    //        }
    //    });
    //}

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                enabled: !user.enabled
            }
        });
    }

    render() {
        return <div>
            <span>{this.state.user.enabled ? 'Disable' : 'Enable'}</span>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={this.state.user.enabled}
                    onChange={this.handleChange}
                />
                <span className="slider round"></span>
            </label>
        </div>
    };
};