<template>
  <v-container class="fill-height" v-border fluid>
    <v-code-combo v-model="val"></v-code-combo>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import VDaterange from "@/components/global/VDateRange.vue";
import moment from "moment";

@Component({
  components: {
    // VDaterange
  }
})
export default class CodeComboBox extends Vue {

  private val='Test'
  
}
</script>
