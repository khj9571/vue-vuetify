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
          <router-link v-if="leaf" :to="{ name: item.router, params: { userId: 123 }}">{{item.name}}</router-link>
          <span v-else>{{item.name}}</span>

          <!-- <span v-if="leaf">
               <router-link v-if="leaf">{{item.name}}</router-link>
          </span>
          <span v-else>
              {{item.name}}
          </span>-->
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
  items = [
    {
      name: "Home",
      router: "home"
    },
    {
      name: "About",
      router: "about"
    },
    {
      name: "컴포넌트",
      router: "",
      children: [
        {
          name: "Events",
          router: "",
          children: [
            {
              name: "LoadingEvent",
              file: "png",
              router: "loadingEvent"
            }
          ]
        },
        {
          name: "Table",
          router: "",
          children: [
            {
              name: "Data Iterator",
              file: "png",
              router: "dataIterators"
            },
            {
              name: "Simple Table",
              file: "png",
              router: "simpleTables"
            },
            {
              name: "Data Table",
              file: "png",
              router: "dataTables"
            }
          ]
        },
        {
          name: "DateRangePicker",
          file: "png",
          router: "dateRangePicker"
        }
      ]
    },
    {
      name: "Example",
      router: "",
      children: [
        {
          name: "Api Exam",
          file: "png",
          router: "api"
        },
        {
          name: "Filter",
          file: "txt",
          router: "filter"
        },
        {
          name: "Directive",
          file: "js",
          router: "directive"
        },
        {
          name: "Store",
          file: "json",
          router: "store"
        },
        {
          name: "Layouts",
          router: "layouts",
          children: [
            {
              name: "Layout1",
              file: "png",
              router: "layout1"
            },
            {
              name: "Layout2",
              file: "png",
              router: "layout2"
            },
            {
              name: "Layout3",
              file: "png",
              router: "layout3"
            },
            {
              name: "Layout4",
              file: "png",
              router: "layout4"
            }
          ]
        },
        {
          name: "Chart",
          router: "charts",
          children: [
            {
              name: "AreaExample",
              file: "png",
              router: "area"
            },
            {
              name: "BarExample",
              file: "txt",
              router: "bar"
            },
            {
              name: "BubbleExample",
              file: "js",
              router: "bubble"
            },
            {
              name: "ColumnExample",
              file: "json",
              router: "column"
            },
            {
              name: "DonutExample",
              file: "json",
              router: "donut"
            },
            {
              name: "HeatmapExample",
              file: "json",
              router: "heatmap"
            },
            {
              name: "LineExample",
              file: "json",
              router: "line"
            },
            {
              name: "MixedExample",
              file: "json",
              router: "mixed"
            },
            {
              name: "RadialBarExample",
              file: "json",
              router: "radialbar"
            },
            {
              name: "ScatterExample",
              file: "json",
              router: "scatter"
            }
          ]
        }
      ]
    },
    {
      name: "메뉴7",
      file: "md",
      router: ""
    },
    {
      name: "메뉴8",
      file: "js",
      router: ""
    },
    {
      name: "메뉴9",
      file: "txt",
      router: ""
    }
  ];
}
</script>
