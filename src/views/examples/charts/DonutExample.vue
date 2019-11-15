<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart ref="donut" width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
      <div>
        <button @click="updateChart">Update!</button>
      </div>
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
export default class DonutExample extends Vue {
  chartOptions = {
    labels: ["Blue", "Green", "Yellow", "Red"]
  };
  series = [11, 32, 45, 32];

  updateChart() {
    const max = 90;
    const min = 20;
    const newData = this.series.map(() => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    this.series = newData;
  }

  mounted() {}
}
</script>
