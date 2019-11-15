<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart width="500" height="350" type="bubble" :options="chartOptions" :series="series"></apexchart>
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
export default class BubbleExample extends Vue {
  chartOptions = {
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8,
      gradient: {
        enabled: false
      }
    },
    title: {
      text: "Simple Bubble Chart"
    },
    xaxis: {
      tickAmount: 12,
      type: "category"
    },
    yaxis: {
      max: 70
    }
  };
  series = [
    {
      name: "Bubble1",
      data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "Bubble2",
      data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "Bubble3",
      data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: "Bubble4",
      data: this.generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60
      })
    }
  ];

  generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  mounted() {}
}
</script>
