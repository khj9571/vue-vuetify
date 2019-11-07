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
  private toDt: any = moment("20190227").toDate();

  private type = "date";
  private items = ["date", "week", "month", "daterange", "monthrange"];

  mounted() {
    console.log("여기 여기");
    
    console.log(this.a(moment('20191015').toDate()))

        
    console.log(moment('20191022').isoWeek())
        
    console.log(moment(moment('20191029').toDate()).isoWeek())
    //this.fromDt = moment('20150224').toDate();



  }

  a(dt:any) {

      var tdt:any = new Date(dt.valueOf());
     var dayn = (dt.getDay() + 6) % 7;
     tdt.setDate(tdt.getDate() - dayn + 3);
     var firstThursday = tdt.valueOf();
     tdt.setMonth(0, 1);
     if (tdt.getDay() !== 4) 
       {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
  }


  
}
</script>
