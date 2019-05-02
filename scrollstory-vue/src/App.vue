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
      <div class="step" data-step-no="bubble-chart">step 2</div>
      <div class="step" data-step-no="family">step 3</div>
      <div class="step" data-step-no="change">step 4</div>
      <div class="step" data-step-no="sentiment">step 5</div>

      <component slot="graphic" :is="graphic">hello world</component>
    </Scrollama>

    <div class="outro">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, at velit
      sint facere ipsam doloremque placeat vel impedit sapiente alias.
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
import Sentiment from "/src/vis/Sentiment";

export default {
  name: "App",
  components: {
    Scrollama,
    BubbleChart,
    Queens,
    Family,
    Change,
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
    flex: 1;
  }
  .scrollama-graphic {
    flex: 3;
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
  padding: 10vh 0 80vh;
  margin: 0 1rem 10vh;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
