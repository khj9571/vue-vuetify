<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-treeview
        v-model="tree"
        :open="open"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">{{ open ? 'mdi-folder-open' : 'mdi-folder' }}</v-icon>
          <v-icon v-else>{{ files[item.file] }}</v-icon>
        </template>
        <template v-slot:label="{ item, open ,leaf }">
          <!-- <router-link v-if="leaf">{{item.name}}</router-link>
          <span v-else>{{item.name}}</span> -->
          
          <span v-if="leaf">
               123
          </span>
          <span v-else>
                 456
          </span>
        </template>
      </v-treeview>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "side-menu",
  components: {}
})
export default class SideMenu extends Vue {
  open = ["메뉴3","메뉴3-1"];
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
  items = [
    {
      name: "Home",
      router:'/'
    },
    {
      name: "About",
      router:'/about'
    },
    {
      name: "메뉴3",
      children: [
        {
          name: "메뉴3-1",
          children: [
            {
              name: "메뉴3-1-1",
              file: "png"
            }
          ]
        },
        {
          name: "메뉴3-2",
          file: "png"
        },
        {
          name: "메뉴3-3",
          file: "html"
        }
      ]
    },
    {
      name: "메뉴4",
      file: "txt"
    },
    {
      name: "메뉴5",
      file: "js"
    },
    {
      name: "메뉴6",
      file: "json"
    },
    {
      name: "메뉴7",
      file: "md"
    },
    {
      name: "메뉴8",
      file: "js"
    },
    {
      name: "메뉴9",
      file: "txt"
    }
  ];
}
</script>
