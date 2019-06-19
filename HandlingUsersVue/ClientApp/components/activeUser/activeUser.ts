import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Avatar from 'vue-avatar';
import { User } from '../interfaces/user';
import './activeUser.css';

@Component({
    components: {
        UserProfileComponent: require('../activeUser/userProfile.vue.html').default,
        UserRoleComponent: require('../activeUser/userRole.vue.html').default,
        UserSettingsComponent: require('../activeUser/userSettings.vue.html').default,
        Avatar
    }
})
export default class ActiveUserComponent extends Vue {
    @Prop() user!: User
      
    addAvatar(event) {
        this.$emit('addAvatar', event.target.files[0])
        console.log(event.target.files[0]);
    }

    updateUser(event) {
        this.$emit('updateUser');
        console.log(event.target.files[0]);
    }
}