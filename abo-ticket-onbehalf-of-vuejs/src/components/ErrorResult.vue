<template>
    <div v-if='e.showError' id='error'>
        <div v-if="e.status == 404">
            <h1>Not Found</h1>
            <p>Serial number was not found in gWMS</p>
        </div>
        <div v-if="e.status != 404">
            <h1>Error</h1>
            <p><label>Status:</label> <span>{{e.status}}</span></p>
            <p><label>Status Text:</label> <span>{{e.statusText}}</span></p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ErrorModel from '../error.model';

@Component
export default class ErrorResult extends Vue {
  @Prop() private e!: ErrorModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
