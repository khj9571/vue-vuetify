<template>
  <v-container class="fill-height" fluid>
    <!-- <v-layout column>
      <v-row xs10 class="mb-6" no-gutters v-border>
        <v-col lg="1" xs12>
          <v-card class="pa-2" outlined tile>1</v-card>
        </v-col>
        <v-col lg="2">
          <v-card class="pa-2" outlined tile>2</v-card>
        </v-col>
        <v-col lg="3">
          <v-card class="pa-2" outlined tile>3</v-card>
        </v-col>
        <v-col lg="4">
          <v-card class="pa-2" outlined tile>4</v-card>
        </v-col>
        <v-col lg="1">
          <v-card class="pa-2" outlined tile>1</v-card>
        </v-col>
        <v-col lg="1">
          <v-card class="pa-2" outlined tile>1</v-card>
        </v-col>
      </v-row>

      <div v-border>
        <v-btn>1</v-btn>
        <v-btn>2</v-btn>
      </div>
    </v-layout>-->

    <v-layout row wrap>
      <v-flex xs12 sm4 class="box sample1">
        <div>Sample1</div>
      </v-flex>
      <v-flex xs12 sm4 class="box sample2">
        <div>Sample2</div>
      </v-flex>
      <v-flex xs12 sm4 class="box sample1">
        <div>Sample3</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class LayoutExam extends Vue {
  mounted() {}
}
</script>
