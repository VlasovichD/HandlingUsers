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
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
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
            key: -1,
            name: '',
            email: '',
            skype: '',
            signature: '',
            avatar: '',
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
            this.addData(this.state.start, this.state.count);
        }
    }

    onClose() {
        //const { user } = this.state.users[this.state.active];
        //this.setState({ user: { id: this.state.active, avatar: this.state.preview } })
        //const requestOptions = {
        //    method: 'PUT',
        //    headers: { 'Content-Type': 'application/json' },
        //    body: JSON.stringify(user)
        //};
        this.setState({ preview: null })
        //return fetch(`/api/Users/${user.id}`, requestOptions);
    }

    handleUpdate(event) {

    }

    onCrop(preview) {
        this.setState({ preview })
    }

    onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 71680) {
            alert("File is too big!");
            elem.target.value = "";
        };
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
                                className="btn btn-outline-secondary btn-block text-center"
                                onClick={this.addUser.bind(this)}
                            >Add user</button>
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
                            onBeforeFileLoad={this.onBeforeFileLoad}
                        />
                    </div>
                </div>
            </div>
        );
    }
}