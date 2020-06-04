<template>    
  <div v-if='totalPages()>0' class="container" >
     <span v-if="showPreviousLink()" class="pagination-btn" @click="updatePage(currentPage-1)"> < </span>
      {{ currentPage  + 1}} of {{ totalPages()}}
      <span v-if="showNextLink()" class="pagination-btn" @click="updatePage(currentPage + 1)"> > </span> 
     <!-- <ul class="c-pagination">
      <li class="c-pagination__page c-pagination__page--previous"  @click="updatePage(currentPage-1)">previous</li>
      <ul v-for="(num, index) in allPagesNumber" :key="index">
        <li class="c-pagination__page"  @click="updatePage(num)">{{ num }}</li>
      </ul>
      <li class="c-pagination__page c-pagination__page--next" @click="updatePage(currentPage + 1)">next</li>
    </ul>-->
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LosMapModel from '../losMap.model';

@Component
export default class Pagination extends Vue {
    @Prop() private losMaps: Array<LosMapModel>;
    @Prop() private currentPage: number;
    @Prop() private pageSize: number;

    //private allPagesNumber:Array<number> = this.getAllPagesNumber;

   /*
    get getAllPagesNumber(){
        let allPages = new Array(this.totalPages());
        for(let i= 1; i <= allPages.length; i++){
            allPages.push(i);
        }

        return allPages;
    }
    */

   private updatePage(pageNumber: number) {
         this.$emit('page:update', pageNumber);

    };
    private totalPages(): number {
        let total = Math.ceil(this.losMaps.length / this.pageSize);
        return total;
    }

    private showPreviousLink() {
        return this.currentPage == 0 ? false : true;
    }

    private showNextLink() {
        return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination-btn {
    cursor: pointer;
}
.container {
		width: 50%;
		margin: 0 auto;
		padding: 20px;
	}
</style>
