<template>
  <div class="">
    <div class="queens">
      <span class="speech-bubble">
        All the Queens Voices
      </span>
    </div>
    <div class="visualized">
      <span class="speech-bubble">
        An Oral History, Visualized
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
  }

</script>

<style lang="scss">
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
  bottom: 240px;
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
  bottom: 100px;
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
