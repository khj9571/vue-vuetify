<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart width="500" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
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
export default class LineExample extends Vue {
  chartOptions = {
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003"
      ]
    }
  };
  series: any = [
    {
      name: "Series A",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    },
    {
      name: "Series B",
      data: [23, 43, 54, 12, 44, 52, 32, 11]
    }
  ];

  generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
  updateChart() {
    let series = [
      {
        name: "South",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          20,
          {
            min: 10,
            max: 60
          }
        )
      },
      {
        name: "North",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          20,
          {
            min: 10,
            max: 20
          }
        )
      },

      {
        name: "Central",
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          20,
          {
            min: 10,
            max: 15
          }
        )
      }
    ];
    this.series = series;
  }

  mounted() {}
}
</script>
