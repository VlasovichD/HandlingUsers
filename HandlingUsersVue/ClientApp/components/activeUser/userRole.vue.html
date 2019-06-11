import React from 'react';

export class UserRole extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            isUpdated: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleUpdate(event) {
        const { user } = this.state;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`/api/Users/${user.id}`, requestOptions);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="radio">
                        <div className="row bg-light">
                            <div className="col-sm-3">
                                <input
                                    type="radio"
                                    name="role"
                                    value="User"
                                    checked={this.state.user.role === 'User'}
                                    onChange={this.handleChange}
                                    onBlur={this.handleUpdate}
                                />
                                <div>User</div>
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Manager"
                                    checked={this.state.user.role === 'Manager'}
                                    onChange={this.handleChange}
                                    onBlur={this.handleUpdate}
                                />
                                <div>Manager</div>
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Admin"
                                    checked={this.state.user.role === 'Admin'}
                                    onChange={this.handleChange}
                                    onBlur={this.handleUpdate}
                                />
                                <div>Admin</div>
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Support"
                                    checked={this.state.user.role === 'Support'}
                                    onChange={this.handleChange}
                                    onBlur={this.handleUpdate}
                                />
                                <div>Support</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};