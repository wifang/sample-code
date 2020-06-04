<template>
    <div id="losList">
        <div id="notes">
                <section v-bind:aria-labelledby="'dialog_notes__header'" aria-hidden="true" class="c-dialog" 
                v-bind:id="'dialog_notes'" role="dialog" style="top: 4%; left: 65%; max-height: 100%; display: none; z-index: 10; width: 22%" 
                                                        
                tabindex="-1">
                <div class="c-dialog__body">
                    <b>Contact Lookup</b><br>
                    Enter ABO Name, ABO Number or Customer Name
                </div>
                </section>
            </div>
            <div class="search-engine" >
                <div class="search">
                <span  v-show ="!search" class="fa-search"><svg viewBox="0 0 16 16" id="zd-svg-icon-16-search-stroke"><circle cx="7" cy="7" r="6.5" fill="none" stroke="currentColor"/><path stroke="currentColor" stroke-linecap="round" d="M15 15l-5-5"/></svg></span>
                <span  v-show ="search" class="fa-search"><svg  @click="emptySearchInput" viewBox="0 0 16 16" id="zd-svg-icon-16-x-stroke"><path stroke="currentColor" stroke-linecap="round" d="M3 13L13 3m0 10L3 3"/></svg></span>
                <input class="c-txt__input l-grid__item u-2/3" type="text" v-model="search" placeholder="Enter ABO Name, ABO Number or Customer Name">
                &nbsp;  &nbsp; 
                <svg style="margin-left:20px; width: 20px;" @mouseover="openModal('notes')"  @mouseout="closeModal('notes')" :showTooltip="showTooltip" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" tabindex="0" class="LRbp LRbq LRm"><path fill="currentColor" d="M7.5 16C3.36 16 0 12.64 0 8.5 0 4.36 3.36 1 7.5 1S15 4.36 15 8.5c0 4.14-3.36 7.5-7.5 7.5zM7 12.5c0 .28.22.5.5.5s.5-.22.5-.5V8c0-.28-.22-.5-.5-.5S7 7.72 7 8v4.5zM7.5 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path>
                    <title></title>
                </svg>
            </div>
          
        <div style="margin-left:20px; margin-top:20px; font-size:10px; color:darkgrey" :totalContact="totalContact">{{totalContact}} contacts</div>
        <div style="margin-left:20px; margin-top:10px; margin-bottom:10px;">Select contacts to create tickets on behalf of</div>
        <table class="c-table">
            <tr>
              <td align="left">
                <table class="c-table">
                  <thead>
                    <tr class="c-table__row c-table__row--header">
                      <th class="c-table__row__cell"><span style="margin-left:30px">Name</span></th>
                      <th class="c-table__row__cell">ABO Number</th>
                      <th class="c-table__row__cell">Type</th>  
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      class="c-table__row"
                      v-for="(losMap, index) in updateVisibleLosMaps"
                      :key="index"
                      :visibleLosMaps="visibleLosMaps"
                      :losMaps="losMaps"
                      :currentPage="currentPage" 
                      :ticket_tos="ticket_tos">
                      <td v-if="losMap.aboNum !=='0'" class="c-table__row__cell">
                      <label class="container">{{ losMap.aboName  }}
                        <input type="checkbox" :value="losMap" v-model="ticket_tos">
                        <span class="checkmark"></span>
                      </label>
                      </td>
                      <td v-if="losMap.aboNum !=='0'" class="c-table__row__cell">{{ losMap.aboNum }}</td>
                      <td v-if="losMap.aboNum !=='0'" class="c-table__row__cell">{{ losMap.businessNature }}</td>
                    </tr>
                  </tbody>
                </table>
              </td><td></td>
            </tr>
        </table>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LosList extends Vue {
 
 private search: string ="" ;
 private emptySearchInput(){
    this.search ="";
  }

 private openModal(id: string) {
    let popup = document.getElementById('dialog_'+id);
    if (popup != null)
    {
        popup.style.display = 'flex';
    }
  };
 
  private closeModal(id:string) {
    let popup = document.getElementById('dialog_'+id);
    if (popup != null)
    {
        popup.style.display = 'none';
    }
  };

  private searchTerm() {
    this.$emit('search', this.search );
  };

}
</script>

<style scoped>
@import "../assets/app.css";

html {
  overflow: hidden;
}

#app {
  padding: 1em;
}

button {
  margin-left: 0.5em;
}
svg {
  width: 15px;
  overflow: hidden;
  max-height: 100%;
  vertical-align: middle;
}

.search-engine {
    background-color: #E9EBED;
    width: 100%;
    height:60px ;

    border: 1px solid #E9EBED;
    padding: 10px;
    margin-left:20px;
}


.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
label {
  font-weight: normal !important;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid darkgray;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #1F73B7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
  top: 3px;
  width: 5px;
  height: 9px;
  border: solid #fff; 
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/*search*/
.search {
 position: relative;
}

.search input { text-indent: 10%;}
.search .fa-search { 
  position: absolute;
  top: 32%;
  left: 63%;
}


</style>
