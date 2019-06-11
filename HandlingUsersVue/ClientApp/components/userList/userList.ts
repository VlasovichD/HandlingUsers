import Vue from 'vue';
import { Component } from 'vue-property-decorator';
//import userData from './userData';
import './userList.css';

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

    mounted() {
        fetch('api/Users/0/20/true')
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.users = data;
            });
    }
}