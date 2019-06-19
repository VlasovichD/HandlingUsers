import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { User } from '../interfaces/user';
import './userSettings.css';

@Component
export default class UserSettingsComponent extends Vue {
    @Prop() user!: User

    handleUpdate() {
        console.log(this.user.enabled);
        this.$emit('updateUser');
    }
}