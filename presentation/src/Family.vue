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
        words: [
          'family',
          'father',
          'mother',
          'children',
          'parents',
          'husband',
          'wife',
          'grandmother',
          'grandfather',
          'grandparents',
          'sister',
          'brother',
          'daughter',
          'son',
          'cousin'
        ]
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
