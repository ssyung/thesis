<template>
  <div id="app">
    <nav id="nav">
      <a href="#splash" @click.prevent="main = 'splash'">All the Queen's Voices</a>
      <ul>
        <li><a href="#samples" @click.prevent="main = 'samples'">The Data</a></li>
        <li><a href="#visualization" @click.prevent="main = 'visualization'">Visualization</a></li>
      </ul>
    </nav>
    <div id="main" v-on:switchpage="switchpage">
      <component :is="main">main</component>
    </div>
  </div>
</template>

<script>


import Splash from "/src/Splash";
import Samples from "/src/Samples";
import Visualization from "/src/Visualization";
import Identity from "/src/Identity";
import Family from "/src/Family";
import Neighborhoods from "/src/Neighborhoods";
import EventBus from '/src/events'

export default {
  name: "App",
  components: {
    Splash,
    Samples,
    Visualization,
    Identity,
    Neighborhoods,
    Family,
  },
  data() {
    return {
      main: 'splash'
    };
  },
  methods: {
    switchpage(page) {
      console.log(page);
    }
  },
  mounted() {
    EventBus.$on('switchpage', switchto => {
      this.main = switchto
    });
  }
};
</script>

<style lang="scss">

@import '/node_modules/normalize.css/normalize.css';

html, body {
  font-family: "Roboto Mono", monospace;
  background: #f9ede4;
}
img {
  max-width: 100%;
}

nav#nav {
  box-sizing: border-box;
  padding: 0 4px;
  position: fixed;
  font-size: 12px;
  line-height: 24px;
  height: 24px;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid #ddd;
  ul {
    float: right;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      display: inline-block;
      margin-right: 1em;
    }
  }
  a {
    text-decoration: none;
    color: #999;
    &:hover {
      color: #ccc;
    }
  }
}
#main {
  box-sizing: border-box;
  height: 100vh;
  overflow: scroll;
  padding-top: 24px;
  position: relative;
}

</style>
