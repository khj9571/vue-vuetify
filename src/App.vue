<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <side-menu></side-menu>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content class="fill-height">
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>

    <loading :visible.sync="visible" />
  </v-app>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SideMenu from "@/components/layouts/SideMenu.vue";
import Loading from "@/components/global/Loading.vue";
import { loadingEvents } from "@/events/Events";

@Component({
  components: {
    SideMenu,
    Loading
  }
})
export default class App extends Vue {
  drawer = null;

  visible = false;

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
    //  this.$vuetify.theme.dark = true
  }
}
</script>