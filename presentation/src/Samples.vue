<template>
  <div>
    <div class="file-list" id="file-list">
      <ul>
        <li v-for="file of files">
          <a href="#select-file" @click.prevent="select(file)">{{ file.name }}</a>
        </li>
      </ul>
    </div>
    <div class="file-content">
      <div class="audio">
        <audio id="audio" controls="controls">
          <source id="audioSource" src=""></source>
          Your browser does not support the audio format.
        </audio>
      </div>
      <div class="timecode-wrap">
        <div class="timecode" id="timecode">
          <em>Select a record.</em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios');

  export default {
    data() {
      return {
        active: null,
        files: require('/src/data/filedata.json'),
      }
    },
    methods: {
      select(file) {
        // loading/setting audio file
        var audio = document.getElementById('audio');
        var source = document.getElementById('audioSource');
        // source.src = 'https://ssyung.github.io/thesis/audio/'+file.audio;
        // audio.load();

        // loading timecode text
        axios.get('https://ssyung.github.io/thesis/timecodes/'+file.timecode).then((resp) => {
          if (resp.status == 200) {
            let text = resp.data;
            var timecode = document.getElementById('timecode');
            timecode.innerHTML = text;
          }
        })
      }
    },
    mounted() {
      document.getElementById('file-list').style.height = window.innerHeight - document.getElementById('nav').height;
      // console.log(document.getElementById('file-list').);
    },
  }

</script>

<style lang="scss">
  .file-list {
    width: 30%;
    box-sizing: border-box;
    float: left;
    overflow: auto;
    height: 640px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        padding: 5px;
        margin: 0;
        border-bottom: 1px solid #ddd;
      }
      a {
        color: #666;
      }
    }
  }
  .file-content {
    $audio-height: 60px;
    float: right;
    width: 70%;
    position: relative;
    .audio {
      position: absolute;
      top: 0px;
      width: 100%;
      height: $audio-height;
      #audio {
        margin: 0 auto;
        display: block;
        width: 100%;
      }
    }
    .timecode-wrap {
      box-sizing: border-box;
      height: 640px;
      position: absolute;
      width: 100%;
      top: $audio-height;
      padding: 20px;
    }
    .timecode {
      overflow: auto;
      height: 600px;
      white-space: pre-wrap;
    }
  }
</style>
