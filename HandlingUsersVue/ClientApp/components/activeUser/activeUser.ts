import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Avatar from 'vue-avatar';
import './activeUser.css';

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
    @Prop() user!: User
    
    addAvatar() {

    }

    updateUser() {
        this.$emit('updateUser');
    } 
}