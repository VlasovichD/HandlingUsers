import React, { Component } from 'react';

import "react-tabs/style/react-tabs.css";
import './components/site.css';
import SwitchMenu from './components/SwitchMenu';
import SearchPlugin from './components/SearchPlugin';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            initData: [],
            start: 0,
            count: 20,
            preview: null,
            src: null,
            isLoading: true,
            active: 0,
            term: '',
            enabled: true
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch(`api/Users/0/${this.state.count}/${this.state.enabled}`)
            .then(response => response.json())
            .then(data => {
                this.setState(...this.state, { users: data, initData: data, isLoading: false, start: this.state.start + this.state.count });
            });
    }

    addData(start, count) {
        fetch(`api/Users/${start}/${count}/${this.state.enabled}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: this.state.users.concat(data),
                    initData: this.state.initData.concat(data),
                    start: this.state.users.length + this.state.count
                });
            });
    }

    addUser(start, count) {
        const data = {
            name: null,
            email: null,
            skype: null,
            signature: null,
            avatar: null,
            role: 'User',
            enabled: true
        }

        this.setState({
            users: this.state.users.concat(data),
            initData: this.state.initData.concat(data),
            active: this.state.users.length
        });
    }

    onScrollList(event) {
        event.preventDefault();
        const scrollBottom = event.target.scrollTop +
            event.target.offsetHeight === event.target.scrollHeight;

        if (scrollBottom) {
            this.addData(this.state.start, this.state.count); //API method
        }
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

    reloadData(config) {
        this.setState(config);
        this.setState({ active: 0, start: 0 });
        this.loadData();
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-light">
                    <div className="col-sm-3">
                        <div className="input-group mb-3">
                            <button
                                className="btn btn-light btn-block text-left"
                                onClick={this.addUser.bind(this)}
                            >&#8853; Add user</button>
                        </div>
                        <div>
                            <SearchPlugin
                                term={this.state.term}
                                data={this.state.initData}
                                update={this.updateData.bind(this)}
                            />
                        </div>
                        <div>
                            <SwitchMenu
                                data={this.state}
                                update={this.reloadData.bind(this)}
                                enabled={this.state.enabled}
                            />
                        </div>
                        <div className="sidebar" onScroll={event => this.onScrollList(event)}>
                            <UserList
                                data={this.state}
                                update={this.updateData.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <ActiveUser
                            data={this.state}
                            update={this.updateData.bind(this)}
                            active={this.state.active}
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                        />
                    </div>
                </div>
            </div>
        );
    }
}