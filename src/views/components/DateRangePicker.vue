<template>
  <v-container class="fill-height" fluid>
    <v-layout column>
      <v-row justify="center" align="start" dense>
        <v-daterange :type="type" :fromDt.sync="fromDt" :toDt.sync="toDt" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-combobox v-model="type" :items="items" label="Combobox" outlined dense></v-combobox>
        </v-col>
      </v-row>
      <v-row dense justify="center" align="start">{{ fromDt | toDate}} ~ {{toDt | toDate}}</v-row>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VDaterange from "@/components/global/VDateRange.vue";
import moment from "moment";

@Component({
  components: {
    VDaterange
  }
})
export default class DateRangePicker extends Vue {
  private fromDt: any = moment("20190224").toDate();
  private toDt: any = moment("20190224").toDate();

  private type = 'daterange';
  private items= [
          'date',
          'week',
          'month',
          'daterange',
          'monthrange'
        ]

  mounted() {
    console.log("여기 여기");
    console.log(moment(this.fromDt).isBefore(this.toDt));
    console.log(moment(this.fromDt).isBefore(this.fromDt));
    //this.fromDt = moment('20150224').toDate();
  }
}
</script>
