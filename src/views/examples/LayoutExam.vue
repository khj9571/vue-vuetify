<template>
  <v-container class="fill-height" fluid>
    <v-row class="mb-6" justify="left" no-gutters v-border>
      <v-col lg="1">
        <v-card class="pa-2" outlined tile>1</v-card>
      </v-col>
      <v-col lg="1">
        <v-card class="pa-2" outlined tile>2</v-card>
      </v-col>
    </v-row>

    <div v-border>
        <v-btn>1</v-btn>
        <v-btn>2</v-btn>
    </div>
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
