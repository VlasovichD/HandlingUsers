import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        //MenuComponent: require('../navmenu/navmenu.vue.html').default,
        UserListComponent: require('../userList/userList.vue.html').default,

        FetchDataComponent: require('../fetchdata/fetchdata.vue.html').default
    }
})
export default class AppComponent extends Vue {
}
