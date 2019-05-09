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
          'American',
          'Asian',
          'Baptist',
          'Black',
          'Brazilian',
          'Catholic',
          'Chinese',
          'Colombian',
          'Dominican',
          'European',
          'foreign',
          'gay',
          'German',
          'Guyanese',
          'Haitian',
          'Hindu',
          'Hispanic',
          'immigrant',
          'Indian',
          'Irish',
          'Italian',
          'Jamaican',
          'Japanese',
          'Jewish',
          'Korean',
          'Latino',
          'lesbian',
          'Lutheran',
          'Methodist',
          'Muslim',
          'Native American',
          'Nepali',
          'Peruvian',
          'Polish',
          'Protestant',
          'Puerto Rican',
          'queer',
          'Roman Catholic',
          'Sikh',
          'South Asian',
          'Spanish',
          'Taiwanese',
          'Tibetan',
          'trans',
          'transgender',
          'White',
        ]
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
