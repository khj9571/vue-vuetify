<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart width="350" type="radialBar" :options="chartOptions" :series="series"></apexchart>
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
export default class RadialBarExample extends Vue {
  chartOptions = {
    labels: ["Percent"]
  };
  series = [81];

  mounted() {}
}
</script>
