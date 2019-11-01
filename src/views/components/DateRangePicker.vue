<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <!-- <v-daterange v-model="range"></v-daterange> -->
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker in dialog"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker without buttons"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            <v-date-picker v-model="date" ></v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VDaterange from "@/components/global/VDateRange.vue";

@Component({
  components: {
    VDaterange
  }
})
export default class DateRangePicker extends Vue {
  private date = new Date().toISOString().substr(0, 10);

  private menu = false;
  private modal = false;
  private menu2 = false;

  mounted() {}
}
</script>
