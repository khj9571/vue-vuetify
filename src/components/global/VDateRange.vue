<template>
  <div :class="defaultStyle">
    <v-menu
      v-model="isShow"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="deteFieldLabel"
          label="Picker without buttons"
          single-line
          outlined
          prepend-icon="event"
          readonly
          v-on="on"
          dense
        ></v-text-field>
      </template>

      <v-layout>
        <v-date-picker
          locale="ko"
          v-model="fromDate"
          :day-format="dayformat"
          :type="dateType"
          @input="from_dateChange($event)"
        ></v-date-picker>
        <v-date-picker
          v-if="isRange"
          locale="ko"
          v-model="toDate"
          :type="dateType"
          :allowed-dates="allowedDates"
          :day-format="dayformat"
          @input="to_dateChange($event)"
        ></v-date-picker>
      </v-layout>
    </v-menu>
  </div>
</template>

<style scoped>
.defalut {
  width: 140px;
}

.range {
  width: 230px;
}
</style>

<script lang="ts">
import { Component, Prop, PropSync, Watch, Vue } from "vue-property-decorator";
import moment from "moment";
import { cloneDeep, values, every } from "lodash";
enum Type {
  DATE = "date",
  WEEK = "week",
  MONTH = "month",
  DATE_RANGE = "daterange",
  MONTH_RANGE = "monthrange"
}

@Component({
  name: "v-daterange",
  components: {}
})
export default class VDateRange extends Vue {
  @Prop({ default: "date" }) readonly type!: string;

  /**
   * get RangType
   */
  get isRange() {
    const ranges = [Type.DATE_RANGE.toString(), Type.MONTH_RANGE.toString()];
    return ranges.includes(this.type);
  }

  /**
   * get TextField Label Name
   */
  get deteFieldLabel() {
    var format: string = "YYYY-MM-DD";
    if (this.type == Type.MONTH || this.type == Type.MONTH_RANGE)
      format = "YYYY-MM";

    var fromDt = moment(this.sync_fromDt).format(format);
    var toDt = moment(this.sync_toDt).format(format);

    if (
      this.type == Type.DATE ||
      this.type == Type.MONTH ||
      this.type == Type.WEEK
    )
      return fromDt;
    return `${fromDt}~${toDt}`;
  }

  /**
   * get DateTtype
   */
  get dateType() {
    if (this.type == Type.MONTH || this.type == Type.MONTH_RANGE)
      return "month";
    return "date";
  }

  /**
   * get Style
   */
  get defaultStyle() {
    var style: any = {};
    if (this.isRange) {
      style["range"] = true;
    } else {
      style["defalut"] = true;
    }
    return style;
  }

  /**
   * From Date
   */
  @PropSync("fromDt", {
    default: () => {
      return new Date();
    }
  })
  sync_fromDt!: Date;

  /**
   * to Date
   */
  @PropSync("toDt", {
    default: () => {
      return new Date();
    }
  })
  sync_toDt!: Date;

  @Watch("type", { immediate: true })
  onTypeChanged(val: any, oldVal: any) {
    console.log("Type 체인지");
  }

  @Watch("fromDt", { immediate: true })
  onFromDtChanged(val: Date, oldVal: Date) {
    console.log("from Dt 체인지");
    console.log(val);

    if (moment(this.sync_toDt).isBefore(this.sync_fromDt))
      this.sync_toDt = cloneDeep(this.sync_fromDt);

    if (this.type == Type.MONTH || this.type == Type.MONTH_RANGE) {
      this.fromDate = moment(val).format("YYYY-MM");
    } else {
      this.fromDate = moment(val).format("YYYY-MM-DD");
    }
  }
  @Watch("toDt", { immediate: true })
  onToDtChanged(val: Date, oldVal: Date) {
    if (this.type == Type.MONTH || this.type == Type.MONTH_RANGE) {
      this.toDate = moment(val).format("YYYY-MM");
    } else {
      this.toDate = moment(val).format("YYYY-MM-DD");
    }
  }

  @Watch("isShow", { immediate: false })
  onisShowChanged(val: any, oldVal: any) {
    if (!val) {
      this.selectedChange.fromChange = false;
      this.selectedChange.toChange = false;
    }
  }

  @Watch("selectedChange", { immediate: false, deep: true })
  onSelectedChanged(val: any, oldVal: any) {
    if (every(values(val), Boolean)) this.isShow = false;
  }

  private fromDate: string = moment().format("YYYY-MM-DD");

  private toDate: string = moment().format("YYYY-MM-DD");

  private isShow = false;

  private selectedChange: any = { fromChange: false, toChange: false };

  mounted() {
    // console.log(this.isRange);
  }

  from_dateChange(evt: any) {
    this.sync_fromDt = moment(evt).toDate();
    // this.allowedDates = (val: any) => {
    //   return !moment(moment(val).toDate()).isBefore(this.sync_fromDt);
    // };

    this.selectedChange.fromChange = true;
  }

  to_dateChange(evt: any) {
    this.sync_toDt = moment(evt).toDate();
    this.selectedChange.toChange = true;
  }

  onClick() {
    console.log("click");
  }

  dayformat(value: any) {
    return moment(value).format("DD");
  }

  allowedDates(val: any) {
    return !moment(moment(val).toDate()).isBefore(this.sync_fromDt);
  }

  // allowedDates(val:any) {
  //   return !moment(moment(val).toDate()).isBefore(this.sync_fromDt);
  // }
}
</script>
