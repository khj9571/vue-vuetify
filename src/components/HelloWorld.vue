<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
     Hellow
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import moment from "moment";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;


  mounted() {

    console.log('컴포넌트');
    console.log(moment().format('YYYYMMDD'))
  }

}
</script>
