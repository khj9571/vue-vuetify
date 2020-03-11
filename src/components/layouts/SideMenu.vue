<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <v-treeview
        v-model="tree"
        :open="open"
        :items="items"
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
import { Component, Prop, Vue, PropSync } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
@Component({
  name: "side-menu",
  components: {}
})
export default class SideMenu extends Vue {

    @PropSync("drawer", {
    // default: () => {
    //   return new Date();
    // }
  })
  sync_drawer!: Boolean;

  @Mutation("addMenuItem") addMenuItem: any;


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
      key:"1",
      name: "Home",
      router: "home"
    },
    {
      key:"2",
      name: "About",
      router: "about"
    },
    {
      key:"3",
      name: "컴포넌트",
      router: "",
      children: [
        {
          key:"3-1",
          name: "Events",
          router: "",
          children: [
            {
              key:"3-1-1",
              name: "LoadingEvent",
              file: "png",
              router: "loadingEvent"
            }
          ]
        },
        {
          key:"3-2",
          name: "Table",
          router: "",
          children: [
            {
              key:"3-2-1",
              name: "Data Iterator",
              file: "png",
              router: "dataIterators"
            },
            {
              key:"3-2-2",
              name: "Simple Table",
              file: "png",
              router: "simpleTables"
            },
            {
              key:"3-2-3",
              name: "Data Table",
              file: "png",
              router: "dataTables"
            }
          ]
        },
        {
          key:"3-3",
          name: "DateRangePicker",
          file: "png",
          router: "dateRangePicker"
        }
      ]
    },
    {
      key:"4",
      name: "Example",
      router: "",
      children: [
        {
          key:"4-1",
          name: "Api Exam",
          file: "png",
          router: "api"
        },
        {
          key:"4-2",
          name: "Filter",
          file: "txt",
          router: "filter"
        },
        {
          key:"4-3",
          name: "Directive",
          file: "js",
          router: "directive"
        },
        {
          key:"4-4",
          name: "Store",
          file: "json",
          router: "store"
        },
        {
          key:"4-5",
          name: "Layouts",
          router: "layouts",
          children: [
            {
              key:"4-5-1",
              name: "Layout1",
              file: "png",
              router: "layout1"
            },
            {
              key:"4-5-2",
              name: "Layout2",
              file: "png",
              router: "layout2"
            },
            {
              key:"4-5-3",
              name: "Layout3",
              file: "png",
              router: "layout3"
            },
            {
              key:"4-5-4",
              name: "Layout4",
              file: "png",
              router: "layout4"
            }
          ]
        },
        {
          key:"4-6",
          name: "Chart",
          router: "charts",
          children: [
            {
              key:"4-6-1",
              name: "AreaExample",
              file: "png",
              router: "area"
            },
            {
              key:"4-6-2",
              name: "BarExample",
              file: "txt",
              router: "bar"
            },
            {
              key:"4-6-3",
              name: "BubbleExample",
              file: "js",
              router: "bubble"
            },
            {
              key:"4-6-4",
              name: "ColumnExample",
              file: "json",
              router: "column"
            },
            {
              key:"4-6-5",
              name: "DonutExample",
              file: "json",
              router: "donut"
            },
            {
              key:"4-6-6",
              name: "HeatmapExample",
              file: "json",
              router: "heatmap"
            },
            {
              key:"4-6-7",
              name: "LineExample",
              file: "json",
              router: "line"
            },
            {
              key:"4-6-8",
              name: "MixedExample",
              file: "json",
              router: "mixed"
            },
            {
              key:"4-6-9",
              name: "RadialBarExample",
              file: "json",
              router: "radialbar"
            },
            {
              key:"4-6-10",
              name: "ScatterExample",
              file: "json",
              router: "scatter"
            }
          ]
        }
      ]
    },
    {
      key:"5",
      name: "메뉴7",
      file: "md",
      router: ""
    },
    {
      key:"6",
      name: "메뉴8",
      file: "js",
      router: ""
    },
    {
      key:"7",
      name: "메뉴9",
      file: "txt",
      router: ""
    }
  ];

  onItemChange(item:any) {   
    const [selectedItem] = item
    this.addMenuItem(selectedItem)

    this.sync_drawer = false
  }
}
</script>
