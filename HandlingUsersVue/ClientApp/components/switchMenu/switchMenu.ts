import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class SwitchMenuComponent extends Vue {
    @Prop() enabled!: boolean;
    
    handleEnabled(enabled) {
        this.$emit('switch', enabled);
    };
}

