<template>
   <v-container>
       <v-btn @click="show()">로딩바 보이기</v-btn>
       <v-btn @click="hide()">로딩바 숨기기</v-btn>
   </v-container>
</template>

<style>

</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {loadingEvents} from '@/events/Events'

@Component({
  name: "loading-event",
  components: {}
})
export default class LoadingEvent extends Vue {


  show() {
   loadingEvents.$emit('show')
  }

  hide() {
    loadingEvents.$emit('hide')
  }


  mounted() {}
}
</script>
