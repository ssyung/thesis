<template>
  <div class="splash">
    <div class="queens">
      <span class="speech-bubble"></span>
    </div>
    <div class="visualized">
      <span class="speech-bubble"></span>
    </div>
  </div>
</template>

<script>
  import Typed from 'typed.js';
  export default {
    data() {
      return {

      }
    },
    mounted() {
      new Typed(".queens .speech-bubble", {
        strings: ['All the Queens Voices'],
        typeSpeed: 100,
        showCursor: false
      })
      setTimeout(function() {
        document.querySelectorAll('.visualized')[0].style.display = 'block';
        new Typed(".visualized .speech-bubble", {
          strings: ['An Oral History, Visualized'],
          typeSpeed: 100,
          showCursor: false,
        })
      }, 3200)

    }
  }

</script>

<style lang="scss">
.splash {
  background: url(/img/new_york_city_1917_crop.jpg) center center no-repeat;
  background-size: cover;
  height: 100%;
}
$speech-color: #dbc5b6;
.speech-bubble {
	position: relative;
	background: $speech-color;
	border-radius: .4em;
  display: inline-block;
}
.speech-bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-top-color: $speech-color;
	border-bottom: 0;
	margin-left: -10px;
	margin-bottom: -20px;
}
.queens {
  position: absolute;
  left: 60px;
  bottom: 250px;
  .speech-bubble {
    padding: 0.5em;
    font-size: 48px;
    &:after {
  	   left: 40px;
      border-left: 0;
    }
  }
}
.visualized {
  position: absolute;
  right: 60px;
  bottom: 120px;
  display: none;
  .speech-bubble {
    padding: 0.5em;
    font-size: 36px;
    &:after {
    	right: 40px;
      border-right: 0;
    }
  }
}

</style>
