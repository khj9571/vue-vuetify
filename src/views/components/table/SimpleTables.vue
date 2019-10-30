<template>
  <v-container fluid>
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

      <v-row></v-row>

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
  mounted() {}
}
</script>
