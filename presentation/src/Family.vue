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
          { "word": 'family', "color": "#f47d7d" },
          { "word": 'father', "color": "#f47d7d" },
          { "word": 'mother', "color": "#f47d7d" },
          { "word": 'children', "color": "#f47d7d" },
          { "word": 'parents', "color": "#f47d7d" },
          { "word": 'husband', "color": "#f47d7d" },
          { "word": 'wife', "color": "#f47d7d" },
          { "word": 'grandmother', "color": "#f47d7d" },
          { "word": 'grandfather', "color": "#f47d7d" },
          { "word": 'grandparents', "color": "#f47d7d" },
          { "word": 'sister', "color": "#f47d7d" },
          { "word": 'brother', "color": "#f47d7d" },
          { "word": 'daughter', "color": "#f47d7d" },
          { "word": 'son', "color": "#f47d7d" },
          { "word": 'cousin', "color": "#f47d7d" },
        ]
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
