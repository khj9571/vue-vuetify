<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart width="500" height="300" type="heatmap" :options="chartOptions" :series="series"></apexchart>
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
export default class HeatmapExample extends Vue {
  chartOptions = {
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    xaxis: {
      type: "category"
    },
    title: {
      text: "HeatMap Chart (Single color)"
    }
  };
  series = [
    {
      name: "Metric1",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric2",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric3",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric4",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric5",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric6",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric7",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric8",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    },
    {
      name: "Metric9",
      data: this.generateData(20, {
        min: 0,
        max: 90
      })
    }
  ];

  generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  mounted() {}
}
</script>
