<template>
  <!-- <HelloWorld /> -->
  <loading/>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import Loading from '@/components/global/Loading.vue'

export default Vue.extend({
  components: {
    HelloWorld,
    Loading
  },
  created() {

    console.log('Home 시작')
  }
})
</script>
