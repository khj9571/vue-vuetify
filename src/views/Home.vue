<template>
  <HelloWorld />
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default Vue.extend({
  components: {
    HelloWorld
  },
  created() {

    console.log('Home 시작')
  }
})
</script>
