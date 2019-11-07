<template>
  <!--       class="ma-3 pa-6" -->
  <v-container fill-height fluid v-border>
    <v-layout column>
      <v-flex xs2 v-border>
        <v-sheet>우리는 인생을 사는 이유를 깨우쳐야한다.</v-sheet>
        <v-btn>버튼1</v-btn>
      </v-flex>
      <v-flex v-border>
        <v-btn>버튼2</v-btn>
      </v-flex>
    </v-layout>
    <!-- <v-layout column>
      <v-row v-border>
        <v-col>
          <v-card outlined>
              1
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
              2
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
              3
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
              4
          </v-card>
        </v-col>
      </v-row>

      <v-row v-border>

        <v-btn class="ma-3">Btn1</v-btn>
        <v-btn class="ma-3">Btn2</v-btn>
      </v-row>

      <v-row></v-row>
    </v-layout>-->
  </v-container>
</template>

<style>
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SimpleTables extends Vue {
  mounted() {
    console.log(this.$route);
  }
}
</script>
