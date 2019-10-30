<template>
  <v-container class="fill-height" v-border fluid>
    <v-layout column>
      <v-row :align="'start'">
        <v-col>디렉티브</v-col>
      </v-row>

    </v-layout>
  </v-container>
</template>

<style>
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class DirectiveExam extends Vue {

    mounted() {

        console.log(this);
    }
}
</script>
