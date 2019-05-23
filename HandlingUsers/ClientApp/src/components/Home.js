import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/UsersData';
import UserMenu from './UserMenu';
import './Home.css';
import './UserEnabling.css';
import { Avatar } from 'react-native-elements';


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
                        <Tabs>
                            <TabList className="nav justify-content-center bg-secondary">
                                <Tab className="nav-item nav-link">Profile</Tab>
                                <Tab className="nav-item nav-link">User role</Tab>
                                <Tab className="nav-item nav-link">Settings</Tab>
                            </TabList>
                            <div className="row">
                                <div className="col-sm-4">
                                    <Avatar
                                        size="large"
                                        title="LW"
                                        onPress={() => console.log("Works!")}
                                        activeOpacity={0.7}
                                        source={{
                                            uri:
                                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                        }}
                                    />
                                </div>
                                <div className="col-sm-8">
                                    <TabPanel>
                                        <UserProfile />
                                    </TabPanel>
                                    <TabPanel>
                                        <UserRole />
                                    </TabPanel>
                                    <TabPanel>
                                        <UserEnabling />
                                    </TabPanel>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
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
        return <div>
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
    }
}

class UserRole extends React.Component {

    constructor(props) {
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div>
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="User"
                            //checked={this.state.selectedOption === 'User'}
                            onChange={this.handleOptionChange} />
                        User
                     </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Manager"
                            //checked={this.state.selectedOption === 'Manager'}
                            onChange={this.handleOptionChange} />
                        Manager
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Admin"
                            //checked={this.state.selectedOption === 'Admin'}
                            onChange={this.handleOptionChange} />
                        Admin
                     </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Support"
                            //checked={this.state.selectedOption === 'Support'}
                            onChange={this.handleOptionChange} />
                        Support
                     </label>
                </div>
            </form>
        </div>
    }
}

class UserEnabling extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: null
        }
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    componentWillMount() {
        this.setState({ isChecked: this.props.isChecked });
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <div className="switch-container">Enable
            <label>
                <input ref="switch" checked={this.state.isChecked} onChange={this._handleChange} className="switch" type="checkbox" />
                <div>
                    <div>
                        
                    </div>
                </div>
            </label>
        </div>
    }

    _handleChange() {
        this.setState({ isChecked: !this.state.isChecked });
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
