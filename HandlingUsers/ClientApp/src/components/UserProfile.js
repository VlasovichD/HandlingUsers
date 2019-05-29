import React from 'react';

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            isUpdated: false,
            error: null,
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

        return fetch(`/api/Users/${user.id}`, requestOptions)
            .then(response => {
                if (!response.ok) {
                    console.log(response.text());
                }
            });
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.user.name}
                        placeholder="Firstname Lastname"
                        onChange={this.handleChange}
                        onBlur={this.handleUpdate}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.user.email}
                        placeholder="example@mail.com"
                        onChange={this.handleChange}
                        onBlur={this.handleUpdate}
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skype
                            </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="skype"
                        value={this.state.user.skype}
                        placeholder="live: skype"
                        onChange={this.handleChange}
                        onBlur={this.handleUpdate}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Signature</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="signature"
                        value={this.state.user.signature}
                        placeholder="Write your signature here..."
                        onChange={this.handleChange}
                        onBlur={this.handleUpdate}
                    />
                </div>
            </div>
        );
    };
};
