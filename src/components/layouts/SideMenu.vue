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
          <v-text-field
            v-model="search_keyword"
            outlined
            dense
            hide-details
            @keyup.enter="onKeyEnter"
          >
            <v-icon slot="append" @click="onSearchIconClick">mdi-magnify</v-icon>
          </v-text-field>
        </v-toolbar>

        <v-container fluid>
          <v-treeview
            ref="tree_menu"
            v-model="tree"
            :open="open"
            :items="treeItem"
            :open-all="openAll"
            :active.sync="active"
            activatable
            item-key="key"
            open-on-click
            return-object
            :search="search_keyword"
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
import { cloneDeep, values, every, remove } from "lodash";
import {menuTabChangeEvents , MENUTABCHANGEEVENT} from '@/events/Events'

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

  private treeItem: any = [];

  private openAll: boolean = true;

  private search_keyword: string = "";

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
  active:Array<any> = [];

  created() {
    this.treeItem = this.getMenuItem;
    menuTabChangeEvents.$on(MENUTABCHANGEEVENT.TABMENUCHANGE,(item:any) => {
     
     console.log('아이템 체인지')
     console.log(item)
     this.active = [item]

    })
  }

  onItemChange(item: any) {

    console.log('체인지.....')
    console.log(this.active)
    const [selectedItem] = item;
    this.addMenuItem(selectedItem);
    this.sync_drawer = false;
  }

  onMenuClick() {
    this.openAll = !this.openAll;
    this.tree_menu.updateAll(this.openAll);
  }

  onSearchIconClick() {}

  onKeyEnter() {
    //this.getMenuItem.
    let cloneItem = cloneDeep(this.getMenuItem);

    //console.log(cloneItem[2])
    let temp:Array<any> = []
    let fn = (item: any, parent: any) => {
      if ("children" in item) {
        item.children.forEach((d: any) => {
          fn(d, item.children);
        });
      } else {
        if (String(item.name).toLowerCase().indexOf(String(this.search_keyword).toLowerCase()) == -1) {
          let idx = 0;

          let find = parent.some((dt: any, i: number) => {
            if (item.key == dt.key) {
              idx = i;
              return true;
            }

            return false;
          });

          if (find) {
             
           
          }
        }else {
          temp.push(item)
        }
        return;
      }
    };

    cloneItem.forEach((d: any) => {
      fn(d, cloneItem);
    });

    if(String(this.search_keyword).trim() == '') {
      this.treeItem = this.getMenuItem
     
     setTimeout(() => {
        this.openAll = true
         this.tree_menu.updateAll(this.openAll);
     }, 100);
 
    }else {
      
      console.log(temp)

      this.treeItem = temp
    }

   //this.treeItem = temp
    //  let fn = (item:any) => {

    //     if('children' in item) {

    //        item.children.forEach( (d:any) => {
    //           fn(d)
    //        })
    //     }else {
    //        item.name.indexOf(this.search_keyword)
    //     }

    //  }
  }
}
</script>
