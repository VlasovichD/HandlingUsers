import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        SearchPluginComponent: require('../searchPlugin/searchPlugin.vue.html').default,
        SwitchMenuComponent: require('../switchMenu/switchMenu.vue.html').default,
        UserListComponent: require('../userList/userList.vue.html').default,
        ActiveUserComponent: require('../activeUser/activeUser.vue.html').default
    }
})
export default class AppComponent extends Vue {
}
