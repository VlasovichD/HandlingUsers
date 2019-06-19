import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { User } from '../interfaces/user';

@Component
export default class UserProfileComponent extends Vue {
    @Prop() user!: User

    errors: string[] = [];

    validName(name) {
        var re = /^[A-Za-z\s]+$/;
        return re.test(name);
    }

    validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleUpdate() {
        this.errors = [];

        if (!this.user.name) {
            this.errors.push('Name is empty');
        } else if (!this.validName(this.user.name)) {
            this.errors.push('Name is incorrect');
        }

        if (!this.user.email) {
            this.errors.push('Email is empty');
        } else if (!this.validEmail(this.user.email)) {
            this.errors.push('Email is incorrect');
        }

        if (!this.errors.length) {
            this.$emit('updateUser');
        }
    }
}