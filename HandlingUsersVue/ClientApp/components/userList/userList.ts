import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Avatar from 'vue-avatar';
import { User } from '../interfaces/user';
import './userList.css';

@Component({
    components: {
        Avatar
    }
})
export default class UserListComponent extends Vue {
    @Prop() users!: User[]
    @Prop() active!: number
    @Prop() isLoading!: boolean

    setActive(index) {
        this.$emit('setActiveUser', index);
    }

    handleScroll(event) {
        const scrollBottom = event.target.scrollTop +
            event.target.offsetHeight === event.target.scrollHeight;

        if (scrollBottom) {
            this.$emit('addMoreData');
        }
    }
}