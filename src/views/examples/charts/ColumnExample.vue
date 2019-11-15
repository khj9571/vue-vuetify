<template>
  <v-container class="fill-height" v-border fluid>
    <div class="example">
      <apexchart width="500" height="350" type="bar" :options="chartOptions" :series="series"></apexchart>
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
export default class ColumnExample extends Vue {

 chartOptions= {
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'rounded',
            columnWidth: '55%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val:any) {
              return "$ " + val + " thousands"
            }
          }
        }
      }
      series= [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 41, 98, 87, 44, 91, 81, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }]

 updateChart() {
        const max = 100;
        const min = 20;
        let newSeries:any = [];
        this.series.map((s) => {
          const data = s.data.map(() => {
            return Math.floor(Math.random() * (max - min + 1)) + min
          })
          newSeries.push({ data })
        })
        this.series = newSeries
      }

  mounted() {}
}
</script>
