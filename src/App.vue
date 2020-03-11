<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <side-menu :drawer.sync="drawer"></side-menu>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      {{currentUrl}}
    </v-app-bar>

    <v-content class="fill-height" fluid>
      <!-- <v-container class="fill-height" fluid> -->
      <!-- <router-view></router-view> -->
      <!-- </v-container> -->      
      <tab-menu> </tab-menu>
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view :key="$route.path" />
        </keep-alive>
      </transition>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>

    <loading :visible.sync="visible" />
  </v-app>
</template>

<style lang="scss">
.example {
  background-color: $content_color;
  color: $font_color;
}
</style>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SideMenu from "@/components/layouts/SideMenu.vue";
import TabMenu from "@/components/layouts/TabMenu.vue"
import Loading from "@/components/global/Loading.vue";
import { loadingEvents } from "@/events/Events";

@Component({
  components: {
    SideMenu,
    Loading,
    TabMenu
  }
})
export default class App extends Vue {
  drawer = null;

  visible = false;

  get currentUrl() {
    return this.$route.path;
  }
  //
  created() {
    //loadingEvents.$on('')

    loadingEvents.$on("show", () => {
      this.visible = true;
    });

    loadingEvents.$on("hide", () => {
      this.visible = false;
    });
  }

  mounted() {
    // this.$vuetify.theme.themes.dark.primary = "#4caf50";
    this.$vuetify.theme.dark = true;
  }
}
</script>


