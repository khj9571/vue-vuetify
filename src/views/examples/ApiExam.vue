<template>
   <v-container class="fill-height" fluid>
      <v-layout>          
          <v-btn @click="call_get()">
              Get
          </v-btn>
          <v-btn @click="call_post()">
              Post
          </v-btn>
      </v-layout>
   </v-container>
</template>

<style>

</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {loadingEvents} from '@/events/Events'

@Component({
  components: {}
})
export default class ApiExam extends Vue {


  call_get() {
   this.$restApiService.get("http://localhost:9090/getTest").then(res => {
         console.log(res);
   }, err => {

   })
  }

  call_post() {
    alert('post')
  }

  mounted() {}
}
</script>
