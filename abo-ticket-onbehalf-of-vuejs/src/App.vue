<template>
  <div id="app">
    <button @click='launchCase' class='c-btn c-btn--primary c-btn-sm'>Lookup Contacts</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import ZAFClient from 'zendesk_app_framework_sdk';

(window as any).client = ZAFClient.init();
(window as any).client.invoke('resize', { width: '100%', height: '100px' });

@Component({
  components: {
  },
})

export default class App extends Vue {

  get client() {
    return (window as any).client;
  }

  private currentTicket: any = {};

  private launchCase() {
    this.getCurrentTicket();
    this.client.context().then(this.createModal);
  }

  private getCurrentTicket(){
    let getCurrentTicket: any = {};
    const that = this;
    this.client.get('ticket').then((ticket: any)=>{
      sessionStorage.removeItem('currentTicket');
      sessionStorage.setItem('currentTicket', JSON.stringify(ticket));
    })
  }

  private createModal(context: any): any {
    const parentGuid = context.instanceGuid;
    const data = context.formIndex;
    const currentTicket = this.currentTicket;
    const options = {
      location: 'modal',
      url: 'assets/modal.html#parent_guid=' + parentGuid + '&data=' + data+'&currentTicket=' + currentTicket,
      size: {
        width: '80vw',
        height: '80vw',
      },
    };
    this.client.invoke('instances.create', options);
  }

}
</script>

<style>
@import "assets/app.css";
</style>
