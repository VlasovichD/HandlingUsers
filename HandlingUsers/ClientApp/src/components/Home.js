import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/UsersData';
import UserMenu from './UserMenu';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { users: this.props.users };

        this.filterList = this.filterList.bind(this);
    }

    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        const startIdIndex = parseInt(this.props.match.params.startIdIndex, 10) || 0;
        this.props.requestUsersData(startIdIndex);
    }

    filterList(text) {
        var filteredList = this.props.users.filter(function (user) {
            return user.name.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ users: filteredList });
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-light">
                    <div className="col-sm-3">
                        <div className="input-group mb-3">
                            <button className="btn btn-light btn-block text-left">&#8853; Add user</button>
                        </div>
                        <div>
                            <SearchPlugin filter={this.filterList} />
                        </div>
                        <hr color="#6c757d" />
                        <div>
                            {renderEnablingMenu(this.props)}
                        </div>
                        <div id="sidebar">
                            {renderUsersDataList(this.state)}
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <nav>
                            <div className="nav justify-content-center bg-secondary" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link text-white active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true">Profile</a>
                                <a className="nav-item nav-link text-white" id="nav-role-tab" data-toggle="tab" href="#nav-role" role="tab" aria-controls="nav-role" aria-selected="false">User role</a>
                                <a className="nav-item nav-link text-white" id="nav-settings-tab" data-toggle="tab" href="#nav-settings" role="tab" aria-controls="nav-settings" aria-selected="false">Settings</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><UserProfile /></div>
                            <div className="tab-pane fade" id="nav-role" role="tabpanel" aria-labelledby="nav-role-tab">...</div>
                            <div className="tab-pane fade" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">...</div>
                        </div>
                    </div>
                </div>


            </div >
        );
    }
}

class SearchPlugin extends React.Component {

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">&#128269;</span>
            </div>
            <input type="text" className="form-control" placeholder="Search" onChange={this.onTextChanged} />
        </div>
    }
}

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div className="row">
            <div className="col-sm-4">
                <img src="" alt="" width="189" height="255" className="img-thumbnail" />
            </div>
            <div className="col-sm-8">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Skype</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Signature</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    }
}

function renderUsersDataList(state) {
    return (
        <ul className="list-group" id="sidebar-list">
            {state.users.map(user =>
                <li className="list-group-item" key={user.id}>
                    {user.name}
                </li>
            )}
        </ul>
    );
}

function renderEnablingMenu(props) {
    const prevStartIdIndex = (props.startIdIndex || 0) - 5;
    const nextStartIdIndex = (props.startIdIndex || 0) + 5;

    return <nav className="nav nav nav-fill">
        <a className="nav-item nav-link text-dark" href={`/${prevStartIdIndex}`}><strong>Enabled</strong></a>
        <a className="nav-item nav-link text-dark" href={`/${nextStartIdIndex}`}>Disabled</a>
        {props.isLoading ? <span>Loading...</span> : []}
    </nav>;
}


export default connect(
    state => state.usersData,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);
