<template>
   <v-container class="fill-height" fluid>
       <v-btn @click="show()">로딩바 보이기</v-btn>
       <v-btn @click="hide()">로딩바 숨기기</v-btn>
   </v-container>
</template>

<style>

</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {loadingEvents ,LOADINGEVENT} from '@/events/Events'

@Component({
  name: "loading-event",
  components: {}
})
export default class LoadingEvent extends Vue {


  show() {
   loadingEvents.$emit(LOADINGEVENT.SHOW)
  }

  hide() {
    loadingEvents.$emit(LOADINGEVENT.HIDE)
  }


  mounted() {}
}
</script>
