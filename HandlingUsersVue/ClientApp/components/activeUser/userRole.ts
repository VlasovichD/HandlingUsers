import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { User } from '../interfaces/user';

@Component
export default class UserRoleComponent extends Vue {
    @Prop() user!: User

    handleUpdate() {
        console.log(this.user.role);
        this.$emit('updateUser');
    }
}