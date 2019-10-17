<template lang="pug">
  q-page(padding)
    graph-builder
</template>

<style></style>

<script lang="ts">
  import Vue from 'vue';
  import GraphBuilder from "../components/graphViewer.vue";

  export default Vue.extend({
    name: 'PageIndex',
    components: {GraphBuilder},
    data:()=>({
      logs:[]
    }),
    use({base}) {
      console.log("?")

      base.logs.up(v=>{
          this.logs = v
      })
    }
  });
</script>
