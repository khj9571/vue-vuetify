<template>
  <v-container class="fill-height" fluid>
    <v-layout class="boxOuter">
      <v-layout align-center>
        <v-flex text-xs-left text-sm-center class="box sample1">
          <div>Sample1</div>
        </v-flex>
      </v-layout>
      <v-layout align-start>
        <v-flex text-xs-center text-sm-left class="box sample2">
          <div>Sample2</div>
        </v-flex>
      </v-layout>
      <v-layout align-end>
        <v-flex text-xs-right text-sm-left class="box sample1">
          <!-- <div>Sample3</div> -->
          <v-container>1</v-container>
          <v-container>2</v-container>
          <v-container>3</v-container>
          <v-container v-border>4</v-container>
          <v-container v-border="{color:'#ff0000',thickness:1}">5</v-container>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<style>
.boxOuter {
  height: 200px;
  background: #f5f5f5;
}
.box {
  display: block;
  padding: 10px;
}
.sample1 {
  background: #ccc;
}
.sample2 {
  background: #eee;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Layout3 extends Vue {
  mounted() {}
}
</script>
