<template>
  <!-- <HelloWorld /> -->
  <!-- <loading/> -->
   <v-container style="border:solid 1px;height:100%" fluid>   
     <v-flex text-xs-center>
        <h1>Home 화면</h1>
     </v-flex>
   </v-container>
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
