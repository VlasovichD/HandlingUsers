import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Avatar from 'vue-avatar';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import Avatar from 'react-avatar-edit';
//import { UserProfile } from './UserProfile';
//import { UserRole } from './UserRole';
//import { UserSettings } from './UserSettings';
import './activeUser.css';
import UserListComponent from '../userList/userList';

interface User {
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
        UserProfileComponent: require('../activeUser/userProfile.vue.html').default,
        UserRoleComponent: require('../activeUser/userRole.vue.html').default,
        UserSettingsComponent: require('../activeUser/userSettings.vue.html').default,
        'avatar': Avatar
    }
})
export default class ActiveUserComponent extends Vue {
    //@Prop() readonly user: any

    user: User = {
        name: 'Alex Lynn',
        email: 'Aadsas',
        skype: 'sdf',
        signature: 'saf',
        avatar: '',
        role: 'Admin',
        enabled: true
    };

    //showActiveUser(user) {
    //    this.user = user;
    //};


    //mounted() {
    //    this.user = UserListComponent.arguments.users[1];
    //}
}