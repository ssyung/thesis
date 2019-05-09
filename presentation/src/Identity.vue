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
          { "word": 'American', "color": "#ed9f58" },
          { "word": 'Asian', "color": "#ed9f58" },
          { "word": 'Baptist', "color": "#ed9f58" },
          { "word": 'Black', "color": "#ed9f58" },
          { "word": 'Brazilian', "color": "#ed9f58" },
          { "word": 'Catholic', "color": "#ed9f58" },
          { "word": 'Chinese', "color": "#ed9f58" },
          { "word": 'Colombian', "color": "#ed9f58" },
          { "word": 'Dominican', "color": "#ed9f58" },
          { "word": 'European', "color": "#ed9f58" },
          { "word": 'foreign', "color": "#ed9f58" },
          { "word": 'gay', "color": "#ed9f58" },
          { "word": 'German', "color": "#ed9f58" },
          { "word": 'Guyanese', "color": "#ed9f58" },
          { "word": 'Haitian', "color": "#ed9f58" },
          { "word": 'Hindu', "color": "#ed9f58" },
          { "word": 'Hispanic', "color": "#ed9f58" },
          { "word": 'immigrant', "color": "#ed9f58" },
          { "word": 'Indian', "color": "#ed9f58" },
          { "word": 'Irish', "color": "#ed9f58" },
          { "word": 'Italian', "color": "#ed9f58" },
          { "word": 'Jamaican', "color": "#ed9f58" },
          { "word": 'Japanese', "color": "#ed9f58" },
          { "word": 'Jewish', "color": "#ed9f58" },
          { "word": 'Korean', "color": "#ed9f58" },
          { "word": 'Latino', "color": "#ed9f58" },
          { "word": 'lesbian', "color": "#ed9f58" },
          { "word": 'Lutheran', "color": "#ed9f58" },
          { "word": 'Methodist', "color": "#ed9f58" },
          { "word": 'Muslim', "color": "#ed9f58" },
          { "word": 'Native American', "color": "#ed9f58" },
          { "word": 'Nepali', "color": "#ed9f58" },
          { "word": 'Peruvian', "color": "#ed9f58" },
          { "word": 'Polish', "color": "#ed9f58" },
          { "word": 'Protestant', "color": "#ed9f58" },
          { "word": 'Puerto Rican', "color": "#ed9f58" },
          { "word": 'queer', "color": "#ed9f58" },
          { "word": 'Roman Catholic', "color": "#ed9f58" },
          { "word": 'Sikh', "color": "#ed9f58" },
          { "word": 'South Asian', "color": "#ed9f58" },
          { "word": 'Spanish', "color": "#ed9f58" },
          { "word": 'Taiwanese', "color": "#ed9f58" },
          { "word": 'Tibetan', "color": "#ed9f58" },
          { "word": 'trans', "color": "#ed9f58" },
          { "word": 'transgender', "color": "#ed9f58" },
          { "word": 'White', "color": "#ed9f58" },
        ]
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
