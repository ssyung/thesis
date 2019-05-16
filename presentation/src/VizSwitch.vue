<template>
  <div>
    <ul class="vizswitch">
      <li><a href="#switch" @click.prevent="goto('visualization')">[Top 100 Words]</a></li>
      <li><a href="#switch" style="color: #F47D7D;" @click.prevent="goto('family')">[Family]</a></li>
      <li><a href="#switch" style="color: #ED9F58;" @click.prevent="goto('identity')">[Identity]</a></li>
      <li><a href="#switch" style="color: #EED59B;" @click.prevent="goto('lifestage')">[Lifestage]</a></li>
      <li><a href="#switch" style="color: #9FB59A;" @click.prevent="goto('people')">[People]</a></li>
      <li><a href="#switch" style="color: #86A4BF;" @click.prevent="goto('neighborhoods')">[Neighborhoods]</a></li>
      <li><a href="#switch" style="color: #9879A8;" @click.prevent="goto('value')">[Value]</a></li>
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
