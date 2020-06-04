<template>
    <div>
        <input type="hidden" v-model="ticket_tos">
        <hr class="dotted" /><br>
        <div style="float:left;margin-left:10px; margin-top:4px; font-size: 10px; color:darkgrey " class="LRl LRbc LRbd LRbe LRbb LRaf">Ticket on behalf of:&nbsp;&nbsp;<span v-for="(ticket_to, index) in ticket_tos" :key="index" :ticket_tos="ticket_tos">
         
        <div data-garden-id="tags.tag_view" data-garden-version="7.1.2" class="LRer Tag-sc-1x3j99r-0 index__c-tag___1DRPn index__c-tag--pill___1SoxO iyFxBK" tabindex="0"><img alt="" height="10px" width="10px" src="https://secure.gravatar.com/avatar/793cb2f669ae691485b976efd33a94af?d=https%3A//assets.zendesk.com/images/2016/default-avatar-80.png&amp;s=80&amp;r=g" data-garden-id="tags.avatar" data-garden-version="7.1.2" class="index__c-tag__avatar___Bu1lg"><span class="LRes LRbj LRbi LRag LRl LRet">{{ ticket_to.aboName }}&nbsp;&nbsp; </span><a @click="removeABOName(ticket_to.aboName)"><svg viewBox="0 0 16 16" id="zd-svg-icon-16-x-stroke"><path stroke="currentColor" stroke-linecap="round" d="M3 13L13 3m0 10L3 3"/>
        </svg></a></div>
        </span></div>
        <div style="float: right; padding-right:20px; margin-top:2px"><button class="c-btn c-btn--primary c-btn-sm" @click="submit" >Create Ticket(s)</button></div>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LosMapModel from '../losMap.model';

@Component
export default class CaseForm extends Vue {
  @Prop() private ticket_tos: Array<LosMapModel>;
  @Prop() private ticket_url: string;
  @Prop() private client: any;
  
  private currentTicket: any={};

  private message: string = '';
 

  private  submit() {
      let currentTicket: any = sessionStorage.getItem('currentTicket');
      this.currentTicket = JSON.parse(currentTicket);
      this.currentTicket = this.currentTicket.ticket;

      // update first ticket
    
      const updateUrl =this.ticket_url+this.currentTicket.id+".json";
      console.log(this.ticket_tos[0].aboName)
      const updateTicket:any = {
        "custom_fields": {"id":"360030165014","value":this.ticket_tos[0].aboName}
      };

      const updateSetting:any = {
        url:  updateUrl,
        type: 'PUT',
        dataType:'json',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify( { "ticket": updateTicket })
      }

      this.client.request(updateSetting).then((updateResult:any)=>{
        console.log(updateResult.ticket);
        this.routeToTicket(updateResult.ticket.id);
      })
      
      this.ticket_tos.shift();
      if (this.ticket_tos.length != 0){
            let tickets: any = [];
            this.ticket_tos.forEach( ticket_to => {
              tickets.push(
                  {
                  "brand":this.mapBrand(this.currentTicket.brand), 
                  "subject":  this.currentTicket.subject,
                  "comment":  { "body": this.currentTicket.description},
                  "priority": this.currentTicket.priority,
                  "requester": this.mapRequester(this.currentTicket.requester),
                  "organization": this.mapOrganization(this.currentTicket.organization),
                  "type": this.currentTicket.type,
                  "custom_fields": {"id":"360030165014","value":ticket_to.aboName}
                  }
                )
                })
            const settings:any = {
              url: this.ticket_url+"create_many.json",
              type: 'POST',
              dataType:'json',
              headers: { 'Content-Type': 'application/json' },
              data: JSON.stringify( { "tickets": tickets }
              )
            };

            this.client.request(settings).then((results: any) => {
                 console.log("bulk ticket submitted")
                 this.client.invoke('destroy');
          })
      }

  }

   private mapBrand (brand: any): any {
    if (brand) {
      return {
        hasHelpCenter: brand.hasHelpCenter,
        id: brand.id,
        isActive: brand.isActive,
        isDefault: brand.isDefault,
        logo: brand.logo,
        name: brand.name,
        subdomain: brand.subdomain,
        url: brand.url
      }
    }

    return undefined
  }

  private mapRequester (requester: any): any {
    if (requester) {
      return {
        alias: requester.alias,
        avatarUrl: requester.avatarUrl,
        details: requester.details,
        email: requester.email,
        externalId: requester.externalId,
        id: requester.id,
        identities: this.mapIdentities(requester.identities),
        locale: requester.locale,
        name: requester.name,
        notes: requester.notes,
        organizations: this.mapOrganizations(requester.organizations),
        role: requester.role,
        signature: requester.signature,
        timeZone: this.mapTimeZone(requester.timeZone)
      }
    }
    return undefined
  }

  private mapOrganizations (orgs: any[]): any[] {
    if (orgs && orgs.length > 0) {
      return orgs.map((value: any) => {
        return this.mapOrganization(value)
      })
    }
    return []
  }

  private mapOrganization (org: any): any {
    if (org) {
      return {
        details: org.details,
        domains: org.domains,
        externalId: org.externalId,
        id: org.id,
        name: org.name,
        notes: org.notes,
        sharedComments: org.sharedComments,
        sharedTickets: org.sharedTickets
      }
    }

    return undefined
  }

  private mapIdentities (identities: any[]): any {
    if (identities && identities.length > 0) {
      const results: any[] = identities.map((value: any) => {
        return {
          deliverableState: value.deliverableState,
          id: value.id,
          primary: value.primary,
          type: value.type,
          undeliverableCount: value.undeliverableCount,
          verified: value.verified
        }
      })

      return results
    }
    return []
  }

  private mapTimeZone (timezone: any): any {
    if (timezone) {
      return {
        formattedOffset: timezone.formattedOffset,
        ianaName: timezone.ianaName,
        name: timezone.name,
        offset: timezone.offset,
        translatedName: timezone.translatedName
      }
    }
    return undefined
  }

  private routeToTicket (id: string) {
    this.client.invoke('routeTo', 'ticket', id)
  }

  private removeABOName(aboName:string){
    this.ticket_tos = this.ticket_tos.filter((item)=>{
      return item.aboName !== aboName;
    })

    this.$emit('update:ticket_tos', this.ticket_tos);
  }
}
</script>

<style scoped>
    @import "https://static.zdassets.com/agent/assets/react/js/styles.8824479166bd2c86b.css" ;

svg {
  width: 10px;
  overflow: hidden;
  max-height: 100%;
  vertical-align: middle;
  color:#87929D;
}
/* Dotted red border */
hr.dotted {
  border-top: 1px dotted lightgray;
}
</style>
