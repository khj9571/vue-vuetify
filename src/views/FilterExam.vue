<template>
  <v-container fluid>
    <v-layout column>
      <v-row v-border>
        <v-col>{{'10000000' | toThousand}}</v-col>
      </v-row>

      <v-row>
        <v-col>{{'Kim' | uppercaseFirst}}</v-col>
      </v-row>

      <v-row>
        <v-col>{{'20181202' | toDate}}</v-col>
      </v-row>

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
export default class FilterExam extends Vue {

    mounted() {

        console.log(this);
    }
}
</script>
