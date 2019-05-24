import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/UsersData';
import UserMenu from './UserMenu';
import './UserEnabling.css';
import Avatar from 'react-avatar-edit';
import UserProfile from './UserProfile';
import UserRole from './UserRole';
import UserSettings from './UserSettings';
import SearchPlugin from './SearchPlugin';
import UserList from './UserList';
import ActiveUser from './ActiveUser';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            preview: null,
            src: this.props.src,
            active: 1
        };

        this.filterList = this.filterList.bind(this);
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
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

    onClose() {
        this.setState({ preview: null })
    }

    onCrop(preview) {
        this.setState({ preview })
    }

    updateData(config) {
        this.setState(config);
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
                        <div>
                            {renderEnablingMenu(this.props)}
                        </div>
                        <div id="sidebar">
                            <UserList data={this.state.users} update={this.updateData.bind(this)} />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <ActiveUser data={this.state} active={this.state.active} />
                    </div>
                </div>
            </div>
        );
    }
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
