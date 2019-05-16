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
          "good",
          "music",
          "food",
          "money",
          "art",
          "thought",
          "small",
          "kind",
          "big",
          "love",
          "interview",
          "hard",
          "great",
          "felt",
          "bad",
          "fun",
          "easy",
          "wonderful",
          "exciting",
          "lucky",
          "rich",
          "poor",
          "welcome",
        ]
      }
    },
    computed: {
      words() {
        return this.list.map(w => {
          return { word: w, color: "#9879A8"}
        })
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
