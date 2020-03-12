<template>
  <v-container style="border:solid 1px" fluid>
    <v-tabs v-model="tab" dark @change="onTabChange" show-arrows>
      <v-tab v-for="(item, idx ) in getSelectedMenuItem" :key="item.key">
        {{item.name}}
        <v-icon
          v-if="item.key !='1'"
          style="margin-left:10px"
          @click.stop="onCloseClick(idx)"
          size="small"
        >close</v-icon>
      </v-tab>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

@Component({
  name: "tab-menu",
  components: {}
})
export default class TabMenu extends Vue {
  @Getter("getSelectedMenuItem") getSelectedMenuItem: any;

  @Getter("getCurrentIndex") getCurrentIndex: any;

  @Mutation("removeMenuItem") removeMenuItem: any;

  @Watch("getCurrentIndex", { immediate: true })
  onTypeChanged(val: any, oldVal: any) {
    this.tab = val;
  }

  private tab = 0;

  mounted() {}

  onTabChange(item: any) {
    console.log("Tab Change....");
    if (item == undefined) return;
    const currentItem = this.getSelectedMenuItem[item];
    console.log(currentItem);
    this.$router.push({ name: currentItem.router });
  }

  onCloseClick(idx: number) {
    console.log(idx);
    this.removeMenuItem(idx);
  }
}
</script>
