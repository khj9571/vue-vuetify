<template>
  <v-container class="fill-height" fluid>
    <v-layout column>
      <v-row v-border>
        <v-col>
          <v-card outlined>
              1
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
              2
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
              3
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
              4
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <!--       class="ma-3 pa-6" -->
        <v-btn class="ma-3">Btn1</v-btn>
        <v-btn class="ma-3">Btn2</v-btn>
      </v-row>

      <v-row></v-row>
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
export default class SimpleTables extends Vue {
  mounted() {

    console.log(this.$route)
  }
}
</script>
