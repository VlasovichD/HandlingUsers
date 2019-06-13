import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class SwitchMenuComponent extends Vue {
    enabled: boolean = true;
    
    handleEnabled() { this.enabled = true; };
    handleDisabled() { this.enabled = false; };
}

