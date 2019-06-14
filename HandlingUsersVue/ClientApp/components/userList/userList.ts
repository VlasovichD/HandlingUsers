import Vue from 'vue';
import { Component } from 'vue-property-decorator';
//import userData from './userData';
import './userList.css';
import SwitchMenuComponent from '../switchMenu/switchMenu';

interface User {
    name: string;
    email: string;
    skype: string;
    signature: string;
    avatar: any;
    role: string;
    enabled: boolean;
}

@Component
export default class UserListComponent extends Vue {
    users: User[] = [];
    active: number = 0;
    enabled: boolean = true;
    //start: 0;
    count: number = 20;

    mounted() {
        fetch('api/Users/0/20/' + this.enabled)
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.users = data;
            });
    }

    //loadData() {
    //    fetch(`api/Users/0/${this.state.count}/${this.state.enabled}`)
    //        .then(response => response.json())
    //        .then(data => {
    //            this.setState(...this.state, { users: data, initData: data, isLoading: false, start: this.state.start + this.state.count });
    //        });
    //}

    addData() {
        fetch(`api/Users/${this.users.length}/${this.count}/${this.enabled}`)
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.users = this.users.concat(data);
            });
    }

    setActive(index) {
        this.active = index;
        this.$emit('setActive', this.users[this.active]);

    }

    onScrollEvent(event) {

        const scrollBottom = event.target.scrollTop +
            event.target.offsetHeight === event.target.scrollHeight;

        if (scrollBottom) {
            this.addData();
        }
    }
}