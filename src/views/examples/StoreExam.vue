<template>
  <v-container fluid>
    <v-btn @click="call()">Store Call</v-btn>
    <v-btn @click="call2()">Store Call2</v-btn>
    {{label}}
  </v-container>
</template>

<style>
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class StoreExam extends Vue {
  @Action("call_increment", { namespace: "menu1/menu" }) test: any;
  @Action("test", { namespace: "menu1" }) test2: any;
  @Getter("getIncreMent", { namespace: "menu1/menu" }) label: any;

  mounted() {
    console.log(this);
  }

  call() {
    this.test();
  }

  call2() {
    this.test2();
  }
}
</script>
