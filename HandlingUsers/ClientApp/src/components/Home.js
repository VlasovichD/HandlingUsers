import React, { Component } from 'react';

import "react-tabs/style/react-tabs.css";
import './site.css';
import SearchPlugin from './SearchPlugin';
import UserList from './UserList';
import ActiveUser from './ActiveUser';

export class Home extends Component {

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
            term: ''
        };

        this.loadData();

        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    loadData() {
        fetch(`api/Users/0/${this.state.count}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data, initData: data, isLoading: false, start: this.state.start + this.state.count });
            });
    }

    addData(start, count) {
        fetch(`api/Users/${start}/${count}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: this.state.users.concat(data),
                    initData: this.state.initData.concat(data),
                    start: this.state.start + this.state.count
                });
            });
    }



    onScrollList(event) {
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

    onClickUpdate(e) {
        this.setState({ isUpdated: true });
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
                            <SearchPlugin
                                term={this.state.term}
                                data={this.state.initData}
                                update={this.updateData.bind(this)}
                            />
                        </div>
                        <div>
                            {renderEnablingMenu(this.props)}
                        </div>
                        <div className="sidebar" onScroll={event => this.onScrollList(event)}>
                            <UserList data={this.state} update={this.updateData.bind(this)} />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <ActiveUser data={this.state} update={this.updateData.bind(this)} active={this.state.active} onCrop={this.onCrop} />
                    </div>
                </div>
            </div>
        );
    }
}

function renderEnablingMenu(props) {

    return <nav className="nav nav nav-fill">
        <span> <button type="button" className="btn btn-light"
        //onClick={this.onClickUpdate}
        ><strong>Enabled</strong></button> </span>
        <span> <button type="button" className="btn btn-light"
        //onClick={this.onClickUpdate}
        >Disabled</button> </span>
    </nav>;
}