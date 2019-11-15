<template>
  <v-container class="fill-height" v-border fluid>
    <!-- <v-layout column>
      <v-row :align="'start'">
          <apexchart type=line height=350 :options="chartOptions" :series="series" />
      </v-row>

    </v-layout>-->
    <div class="example" style="background:#ffffff;color:red">
      <apexchart width="500" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
      <div>
        <!-- <button @click="updateChart">Update!</button> -->
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
export default class ChartExam extends Vue {
  series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ];

  chartOptions = {
    chart: {
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  mounted() {}
}
</script>
