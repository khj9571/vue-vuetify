<template>
  <v-container fluid>
    <v-tabs v-model="tab" dark @change="onTabChange">
      <v-tab v-for="item in getSelectedMenuItem" :key="item.key">{{item.name}}</v-tab>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  name: "tab-menu",
  components: {}
})
export default class TabMenu extends Vue {
  
  @Getter("getTest") getTest: any;

  @Getter("getSelectedMenuItem") getSelectedMenuItem: any;

  @Getter("getCurrentIndex") getCurrentIndex: any;

  private tab = 0;

  @Watch("getCurrentIndex", { immediate: true })
  onTypeChanged(val: any, oldVal: any) {
    this.tab = val
  }

  mounted() {

  }

  onTabChange(item:any) {
      console.log('Tab Change....')
      const currentItem = this.getSelectedMenuItem[item]
      console.log(currentItem)
      this.$router.push({name: currentItem.router})
  }
}
</script>
