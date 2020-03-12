<template>
   <v-container class="fill-height" fluid>
      <v-layout>          
          <v-btn @click="call_get()">
              Get
          </v-btn>
          <v-btn @click="call_post()">
              Post
          </v-btn>
          <v-btn @click="call_All()">
              All
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
   this.$restApiService.get("http://localhost:4000/user/sample").then(res => {
        // console.log(res);
   }, err => {

   })
  }

  call_post() {
    alert('post')
  }

  call_All() {
    
    let service1 =  this.$restApiService.get("http://localhost:4000/user/sample");
    let service2 =  this.$restApiService.get("http://localhost:4000/user/sample");
    this.$restApiService.all([service1,service2]).then(res => {

    },err =>{
          alert('에러 입니다')
    })
  }

  mounted() {}
}
</script>
