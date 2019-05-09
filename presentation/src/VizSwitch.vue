<template>
  <div>
    <ul class="vizswitch">
      <li><a href="#switch" @click.prevent="goto('visualization')">[Top 100 Words]</a></li>
      <li><a href="#switch" @click.prevent="goto('family')">[Family]</a></li>
      <li><a href="#switch" @click.prevent="goto('identity')">[Identity]</a></li>
      <li><a href="#switch" @click.prevent="goto('neighborhoods')">[Neighborhoods]</a></li>
    </ul>
  </div>
</template>

<script>
import EventBus from '/src/events'
export default {
  data() {
    return {

    }
  },
  methods: {
    goto(where) {
      EventBus.$emit('switchpage', where);
    }
  }
}
</script>

<style lang="scss">
  .vizswitch {
    list-style: none;
    margin: 0;
    padding: 1em 0;
    text-align: center;
    li {
      display: inline-block;
    }
    a {
      text-decoration: none;
      color: #bca99c;
    }
  }
</style>
