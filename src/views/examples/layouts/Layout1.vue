<template>
  <v-container class="fill-height" fluid>

    <!-- xs sm md lg xl !-->
    <!-- v-layout 내에 하나 이상의 v-flex 가 나열될 수 있다. -->
    <!-- v-layout 이 존재하면 v-flex 가 반드시 필요하다. -->
    <!-- v-layout 내에 v-layout 이 필요한 경우 v-layout > v-flex > v-layout 구조를 사용해야 한다.. -->
    <v-layout row wrap>
      <v-flex  xs12 sm4 text-xs-left text-sm-center class="box sample1" v-border>
        <div>Sample1</div>
      </v-flex>
      <v-flex  xs12 sm4 text-xs-center text-sm-left class="box sample2" v-border>
        <div>Sample2</div>
      </v-flex>
      <v-flex xs12 sm4 text-xs-right text-sm-right class="box sample1" v-border>
        <div>Sample3</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>

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
export default class Layout1 extends Vue {
  mounted() {}
}
</script>
