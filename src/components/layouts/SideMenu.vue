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
          <router-link v-if="leaf" to="/">{{item.name}}</router-link>
          <span v-else>{{item.name}}</span>
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
  open = ["public"];
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
      name: ".git"
    },
    {
      name: "node_modules"
    },
    {
      name: "public",
      children: [
        {
          name: "static",
          children: [
            {
              name: "logo.png",
              file: "png"
            }
          ]
        },
        {
          name: "favicon.ico",
          file: "png"
        },
        {
          name: "index.html",
          file: "html"
        }
      ]
    },
    {
      name: ".gitignore",
      file: "txt"
    },
    {
      name: "babel.config.js",
      file: "js"
    },
    {
      name: "package.json",
      file: "json"
    },
    {
      name: "README.md",
      file: "md"
    },
    {
      name: "vue.config.js",
      file: "js"
    },
    {
      name: "yarn.lock",
      file: "txt"
    }
  ];
}
</script>
