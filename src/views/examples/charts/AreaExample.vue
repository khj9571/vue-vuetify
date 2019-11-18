<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart width="500" height="350" type="area" :options="chartOptions" :series="series"></apexchart>
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
export default class AreaExample extends Vue {
  chartOptions = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    tooltip: {
      fixed: {
        enabled: false,
        position: "topRight"
      }
    }
  };

  series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ];

  mounted() {}
}
</script>
