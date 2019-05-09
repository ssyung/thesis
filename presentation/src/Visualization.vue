<template>
  <div>
    <viz-switch></viz-switch>
    <bubble-chart :words="words"></bubble-chart>
  </div>
</template>

<script>
  import BubbleChart from "/src/BubbleChart";
  import VizSwitch from "/src/VizSwitch";

  export default {
    data() {
      return {
        words: require('/src/data/topwords.json')
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
