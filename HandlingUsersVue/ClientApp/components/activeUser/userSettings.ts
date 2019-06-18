import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import './userSettings.css';

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
export default class UserSettingsComponent extends Vue {
    @Prop() user!: User

    handleUpdate() {
        console.log(this.user.enabled);
        this.$emit('updateUser');
    }
}