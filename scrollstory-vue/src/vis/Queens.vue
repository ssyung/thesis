<template lang="html">
  <div>
    <div class="qns-wrap">
      <h1>Queens Oral History</h1>
      <p>Queens Memory is an ongoing program supported by Queens Library and Queens College, designed to collect stories, images and other evidence of life in the borough of Queens... Queens Memory empowers residents from diverse backgrounds to document the personal histories that together tell a more complete story of life in the borough.</p>
      <audio controls src="/static/QMP_clips_mixdown.mp3"></audio>
      <p>This project seeks to visualize the data and metadata in the oral histories collected by the Queens Memory Project, identifying trends and presenting them in an accessible and compelling manner.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>
.qns-wrap {
  max-width: 600px;
  margin: 0 auto;
}
p {
  line-height: 1.6;
}
</style>
