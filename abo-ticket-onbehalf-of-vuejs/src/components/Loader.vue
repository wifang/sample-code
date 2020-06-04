<template>
    <div class="{'is-loading': loading}">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {
 @Prop() private loading: string;
}
</script>

<style scoped>
</style>
