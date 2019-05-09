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
          { "word": 'Astoria', "color": "#86a4b4" },
          { "word": 'Auburndale', "color": "#86a4b4" },
          { "word": 'Baisley Park', "color": "#86a4b4" },
          { "word": 'Bayside', "color": "#86a4b4" },
          { "word": 'Bayswater', "color": "#86a4b4" },
          { "word": 'Belle Harbor', "color": "#86a4b4" },
          { "word": 'Bellerose', "color": "#86a4b4" },
          { "word": 'Briarwood', "color": "#86a4b4" },
          { "word": 'Broad Channel', "color": "#86a4b4" },
          { "word": 'Cambria Heights', "color": "#86a4b4" },
          { "word": 'College Point', "color": "#86a4b4" },
          { "word": 'Corona', "color": "#86a4b4" },
          { "word": 'Douglaston', "color": "#86a4b4" },
          { "word": 'East Elmhurst', "color": "#86a4b4" },
          { "word": 'Elmhurst', "color": "#86a4b4" },
          { "word": 'Far Rockaway', "color": "#86a4b4" },
          { "word": 'Floral Park', "color": "#86a4b4" },
          { "word": 'Flushing', "color": "#86a4b4" },
          { "word": 'Flushing Meadows Corona Park', "color": "#86a4b4" },
          { "word": 'Forest Hills', "color": "#86a4b4" },
          { "word": 'Forest Hills Gardens', "color": "#86a4b4" },
          { "word": 'Fresh Meadows', "color": "#86a4b4" },
          { "word": 'Glen Oaks', "color": "#86a4b4" },
          { "word": 'Glendale', "color": "#86a4b4" },
          { "word": 'Hillcrest', "color": "#86a4b4" },
          { "word": 'Hollis', "color": "#86a4b4" },
          { "word": 'Holliswood', "color": "#86a4b4" },
          { "word": 'Howard Beach', "color": "#86a4b4" },
          { "word": 'Hunters Point', "color": "#86a4b4" },
          { "word": 'Jackson Heights', "color": "#86a4b4" },
          { "word": 'Jamaica', "color": "#86a4b4" },
          { "word": 'Jamaica Estates', "color": "#86a4b4" },
          { "word": 'Jamaica Hill', "color": "#86a4b4" },
          { "word": 'Kew Gardens', "color": "#86a4b4" },
          { "word": 'Kew Gardens Hills', "color": "#86a4b4" },
          { "word": 'Laurelton', "color": "#86a4b4" },
          { "word": 'Little Neck', "color": "#86a4b4" },
          { "word": 'Long Island City', "color": "#86a4b4" },
          { "word": 'Malba', "color": "#86a4b4" },
          { "word": 'Maspeth', "color": "#86a4b4" },
          { "word": 'Middle Village', "color": "#86a4b4" },
          { "word": 'Neponsit', "color": "#86a4b4" },
          { "word": 'Oakland Gardens', "color": "#86a4b4" },
          { "word": 'Ozone Park', "color": "#86a4b4" },
          { "word": 'Queens Village', "color": "#86a4b4" },
          { "word": 'Queensboro Hill', "color": "#86a4b4" },
          { "word": 'Ravenswood', "color": "#86a4b4" },
          { "word": 'Rego Park', "color": "#86a4b4" },
          { "word": 'Richmond Hill', "color": "#86a4b4" },
          { "word": 'Ridgewood', "color": "#86a4b4" },
          { "word": 'Rockaway Beach', "color": "#86a4b4" },
          { "word": 'Rockaway Park', "color": "#86a4b4" },
          { "word": 'Rockaway Point', "color": "#86a4b4" },
          { "word": 'Rosedale', "color": "#86a4b4" },
          { "word": 'Saint Albans', "color": "#86a4b4" },
          { "word": 'South Jamaica', "color": "#86a4b4" },
          { "word": 'South Ozone Park', "color": "#86a4b4" },
          { "word": 'Springfield Gardens', "color": "#86a4b4" },
          { "word": 'Steinway', "color": "#86a4b4" },
          { "word": 'Sunnyside', "color": "#86a4b4" },
          { "word": 'Whitestone', "color": "#86a4b4" },
          { "word": 'Woodhaven', "color": "#86a4b4" },
          { "word": 'Woodside', "color": "#86a4b4" },
        ]
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
