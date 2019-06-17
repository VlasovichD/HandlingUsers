import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface User {
    id: number;
    name: string;
    email: string;
    skype: string;
    signature: string;
    avatar: any;
    role: string;
    enabled: boolean;
}

@Component({
    components: {
        SearchPluginComponent: require('../searchPlugin/searchPlugin.vue.html').default,
        SwitchMenuComponent: require('../switchMenu/switchMenu.vue.html').default,
        UserListComponent: require('../userList/userList.vue.html').default,
        ActiveUserComponent: require('../activeUser/activeUser.vue.html').default
    },
    filters: {
        filterUsers(users, text) {
            return users.filter(user => {
                return user.name.toLowerCase().indexOf(text.toLowerCase()) > -1
            });
        }
    }
})
export default class AppComponent extends Vue {
    users: User[] = [];
    searchText: string = '';
    active: number = 0;
    enabled: boolean = true;
    start: number = 0;
    count: number = 20;
    isLoading: boolean = false;

    mounted() {
        this.getData(0, this.count, this.enabled);
    }

    addUser() {
        let user: User = {
            id: 0,
            name: '',
            email: '',
            skype: '',
            signature: '',
            avatar: '',
            role: 'User',
            enabled: true
        }

        this.users.unshift(user);
        this.active = 0;
    }

    switchList(enabled) {
        this.enabled = enabled;
        this.users = [];
        this.active = 0;
        this.getData(0, this.count, this.enabled);
    }

    addMoreData() {
        this.getData(this.users.length, this.count, this.enabled);
    }

    setActive(index) {
        this.active = index;
    }

    updateUserData() {
        let user = this.users[this.active];

        if (user.id == 0) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };

            return fetch(`/api/Users`, requestOptions)
                .then(function (response) { if (!response.ok) { throw Error(response.statusText); } return response.json() as Promise<User>; })
                .then(response => this.users[this.active].id = response.id)
                .catch(response => console.log(response));
        }
        else {
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
    }

    getData(start, count, enabled) {
        this.isLoading = true;
        fetch(`api/Users/${start}/${count}/${enabled}`)
            .then(response => response.json() as Promise<User[]>)
            .then(data => {
                this.users = this.users.concat(data);
            }).then(() => { this.isLoading = false; });
    }

    filterText(text) {
        this.searchText = text;
        this.active = 0;
    }
}