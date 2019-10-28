<template>
  <v-container class="fill-height" fluid style="border:solid 1px;">
    <router-view></router-view>
  </v-container>
</template>

<style>
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SubMain extends Vue {
  mounted() {}
}
</script>
