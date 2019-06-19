import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class SearchPluginComponent extends Vue {
    @Prop() searchText!: string

    handleUpdate(event) {
        this.$emit('filterText', event.target.value);
        console.log(event.target.value);
    }
}