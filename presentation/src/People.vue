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
        list: [
          "people",
          "child",
          "friends",
          "person",
          "young",
          "friend",
          "group",
          "teacher",
          "student",
          "police",
          "doctor",
          "nurse",
          "neighbor",
        ]
      }
    },
    computed: {
      words() {
        return this.list.map(w => {
          return { word: w, color: "#9FB59A"}
        })
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
