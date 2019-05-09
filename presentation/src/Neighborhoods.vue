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
          'Arverne',
'Astoria',
'Auburndale',
'Baisley Park',
'Bayside',
'Bayswater',
'Belle Harbor',
'Bellerose',
'Briarwood',
'Broad Channel',
'Cambria Heights',
'College Point',
'Corona',
'Douglaston',
'East Elmhurst',
'Elmhurst',
'Far Rockaway',
'Floral Park',
'Flushing',
'Flushing Meadows Corona Park',
'Forest Hills',
'Forest Hills Gardens',
'Fresh Meadows',
'Glen Oaks',
'Glendale',
'Hillcrest',
'Hollis',
'Holliswood',
'Howard Beach',
'Hunters Point',
'Jackson Heights',
'Jamaica',
'Jamaica Estates',
'Jamaica Hill',
'Kew Gardens',
'Kew Gardens Hills',
'Laurelton',
'Little Neck',
'Long Island City',
'Malba',
'Maspeth',
'Middle Village',
'Neponsit',
'Oakland Gardens',
'Ozone Park',
'Queens Village',
'Queensboro Hill',
'Ravenswood',
'Rego Park',
'Richmond Hill',
'Ridgewood',
'Rockaway Beach',
'Rockaway Park',
'Rockaway Point',
'Rosedale',
'Saint Albans',
'South Jamaica',
'South Ozone Park',
'Springfield Gardens',
'Steinway',
'Sunnyside',
'Whitestone',
'Woodhaven',
'Woodside',
        ]
      }
    },
    components: {
      BubbleChart,
      VizSwitch
    },
  }

</script>
