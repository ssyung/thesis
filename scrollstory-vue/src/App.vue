<template>
  <div id="app">
    <div class="intro">
      <h1>Welcome to Queens</h1>
      <p>An Oral History Visualized</p>
    </div>

    <Scrollama
      :offset="0.1"
      :progress="true"
      @step-enter="changeSection"
      @step-progress="progressSection"
    >
      <div class="step" data-step-no="queens">
        <img src="/static/queenslibrary.png" alt="Queens Library">
      </div>
      <div class="step" data-step-no="bubble-chart">
        <p>Outlines of over 400 interviews were mined to generate this visualization of the top 100 word occurences. Though this is an imperfect analysis of the interview corpus, it does provide an overall view of common themes and discussion points. Explore <a href="bubble/">this visualization</a>.
      </div>
      <div class="step" data-step-no="family">Family</div>
      <div class="step" data-step-no="identity">Identity</div>
      <div class="step" data-step-no="phase">Life Phase</div>
      <div class="step" data-step-no="change">&nbsp;</div>
      <div class="step" data-step-no="sentiment">nbsp;</div>

      <component slot="graphic" :is="graphic">hello world</component>
    </Scrollama>

    <div class="outro">
      <p>
        Stephanie Yung <br>
        M.S. Data Visualization<br>
        The New School Parsons School of Design
      </p>
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import BubbleChart from "/src/vis/BubbleChart";
import Queens from "/src/vis/Queens";
import Family from "/src/vis/Family";
import Change from "/src/vis/Change";
import Identity from "/src/vis/Identity";
import Phase from "/src/vis/Phase";
import Sentiment from "/src/vis/Sentiment";

export default {
  name: "App",
  components: {
    Scrollama,
    BubbleChart,
    Queens,
    Family,
    Change,
    Identity,
    Phase,
    Sentiment
  },
  data() {
    return {
      graphic: "queens"
    };
  },
  mounted() {
    document.querySelectorAll('.scrollama-graphic')[0].style.opacity = 0;
  },
  methods: {
    changeSection({element, index, direction}) {
      this.graphic = element.dataset.stepNo;
    },
    progressSection({element, index, progress}) {
      let graphic = document.querySelectorAll('.scrollama-graphic')[0];
      if (progress < 0.25) {
        graphic.style.opacity = progress / 0.2;
      } else if (progress > 0.8) {
        graphic.style.opacity = (1 - progress) / 0.2;
      } else {
        graphic.style.opacity = 1;
      }
    }
  }
};
</script>

<style lang="scss">

@import '/node_modules/normalize.css/normalize.css';
@import '/node_modules/vue-scrollama/dist/vue-scrollama.css';

html, body {
  font-family: "Merriweather", serif;
}
img {
  max-width: 100%;
}
.outro {
  padding: 30vh 0 60vh;
  text-align: center;
}
.intro {
  text-align: right;
  padding: 10px 30px 80vh;
  margin-bottom: 80vh;
  color: #723582;
  background: url(/static/oldsubwaymap.jpg) no-repeat center center;
  background-size: cover;
}
// additions and overrides of DOM elements vue-scrollama sets up
.scrollama-container {
  display: flex;
  flex-direction: row-reverse;
  .scrollama-steps {
    flex: 3;
  }
  .scrollama-graphic {
    flex: 10;
    height: 80vh;
    top: 10vh;
  }
}

// your elements styles
.graphic {
  height: 100%;
  margin: 0 3rem;
  background-color: #eee;
  font-size: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step {
  /* background: #eee; */
  padding: 20vh 0 70vh;
  margin: 0 1rem 5vh;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
