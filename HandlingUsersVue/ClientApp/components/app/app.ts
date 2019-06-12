import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        UserListComponent: require('../userList/userList.vue.html').default,
        ActiveUserComponent: require('../activeUser/activeUser.vue.html').default
    }
})
export default class AppComponent extends Vue {
}
