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
          "born",
          "time",
          "years",
          "work",
          "moved",
          "life",
          "lived",
          "started",
          "wanted",
          "living",
          "worked",
          "job",
          "year",
          "live",
          "working",
          "day",
          "high school",
          "called",
          "married",
          "knew",
          "met",
          "feel",
          "grew",
          "changed",
          "left",
          "days",
          "change",
          "experience",
          "involved",
          "growing",
          "died",
          "travel"
        ]
      }
    },
    computed: {
      words() {
        return this.list.map(w => {
          return { word: w, color: "#EED59B"}
        })
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
