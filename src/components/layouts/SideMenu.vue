<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <!-- class="mx-auto" max-width="500" -->
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>메뉴</v-toolbar-title>
          <v-btn v-if="openAll" @click="onMenuClick" icon small>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <v-btn v-else @click="onMenuClick" icon small>
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-text-field v-model="search_keywork" outlined dense hide-details @keyup.enter="onKeyEnter">
            <v-icon slot="append" @click="onSearchIconClick">mdi-magnify</v-icon>
          </v-text-field>
        </v-toolbar>

        <v-container fluid>
          <v-treeview
            ref="tree_menu"
            v-model="tree"
            :open="open"
            :items="getMenuItem"
            :open-all="openAll"
            activatable
            item-key="key"
            open-on-click
            return-object
            @update:active="onItemChange"
          >
            <template v-slot:prepend="{ item, open }">
              <v-icon v-if="!item.file">{{ open ? 'mdi-folder-open' : 'mdi-folder' }}</v-icon>
              <v-icon v-else>{{ files[item.file] }}</v-icon>
            </template>
            <template v-slot:label="{ item, open ,leaf }">
              <router-link
                v-if="leaf"
                :to="{ name: item.router, params: { userId: 123 }}"
              >{{item.name}}</router-link>
              <span v-else>{{item.name}}</span>

              <!-- <span v-if="leaf">
               <router-link v-if="leaf">{{item.name}}</router-link>
          </span>
          <span v-else>
              {{item.name}}
              </span>-->
            </template>
          </v-treeview>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync, Ref } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

@Component({
  name: "side-menu",
  components: {}
})
export default class SideMenu extends Vue {
  @Ref("tree_menu") tree_menu: any;

  @PropSync("drawer", {
    // default: () => {
    //   return new Date();
    // }
    default: false
  })
  sync_drawer!: Boolean;

  @Mutation("addMenuItem") addMenuItem: any;

  @Getter("getMenuItem") getMenuItem: any;
  
  private openAll: boolean = true;

  private search_keywork: string = 'search';

  open = ["컴포넌트", "Events"];
  files = {
    html: "mdi-language-html5",
    js: "mdi-nodejs",
    json: "mdi-json",
    md: "mdi-markdown",
    pdf: "mdi-file-pdf",
    png: "mdi-file-image",
    txt: "mdi-file-document-outline",
    xls: "mdi-file-excel"
  };
  tree = [];
  items = [];

  onItemChange(item: any) {
    const [selectedItem] = item;
    this.addMenuItem(selectedItem);
    this.sync_drawer = false;
  }

  onMenuClick() {
    this.openAll = !this.openAll;
    this.tree_menu.updateAll(this.openAll);
  }

  onSearchIconClick() {
  
  }

  onKeyEnter() {
    //this.getMenuItem.
  }
}
</script>
