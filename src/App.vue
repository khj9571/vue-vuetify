<template>
  <v-app id="inspire">
    <v-navigation-drawer width="370" v-model="drawer" app clipped>
      <side-menu :drawer.sync="drawer"></side-menu>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <!-- {{currentUrl}} {{getIsLogin}} -->
      <v-spacer></v-spacer>
        {{$route.meta}}
      <span v-if="getIsLogin">
        {{getUserInfo.name}} 님 환영 합니다
        <!-- <v-avatar color="indigo">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>-->

        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(n, idx ) in ['로그 아웃','유저 정보']"
              :key="idx"
              @click="onListItemClick(idx)"
            >
              <v-list-item-title>{{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </span>
    </v-app-bar>

    <v-content class="fill-height" fluid>
      <!-- <v-container class="fill-height" fluid> -->
      <!-- <router-view></router-view> -->
      <!-- </v-container> -->
      <tab-menu></tab-menu>
      <!-- <transition name="fade" mode="out-in"> -->
      <!-- <keep-alive>
          <router-view :key="$route.path" />
      </keep-alive>-->

      <keep-alive>
        <router-view v-if="$route.meta && $route.meta.keepAlive == true"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <!-- </transition> -->

      <!-- <router-view></router-view> -->
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>

    <loading :visible.sync="visible" />

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>로그아웃</v-card-title>

        <v-card-text>로그 아웃 하시겠습니까?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false; clearLogout()">예</v-btn>

          <v-btn text @click="dialog = false">아니요</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import TabMenu from "@/components/layouts/TabMenu.vue";
import Loading from "@/components/global/Loading.vue";
import { loadingEvents, LOADINGEVENT } from "@/events/Events";
import { State, Action, Getter, Mutation } from "vuex-class";

@Component({
  components: {
    SideMenu,
    Loading,
    TabMenu
  }
})
export default class App extends Vue {
  @Getter("getIsLogin") getIsLogin: any;
  @Getter("getUserInfo") getUserInfo: any;
  @Mutation("clearLogout") clearLogout: any;

  drawer = null;

  visible = false;

  dialog = false;

  get currentUrl() {
    return this.$route.path;
  }
  //
  created() {
    //loadingEvents.$on('')

    loadingEvents.$on(LOADINGEVENT.SHOW, () => {
      this.visible = true;
    });

    loadingEvents.$on(LOADINGEVENT.HIDE, () => {
      this.visible = false;
    });
  }

  mounted() {
    // this.$vuetify.theme.themes.dark.primary = "#4caf50";
    this.$vuetify.theme.dark = true;
  }

  onListItemClick(item: any) {
    if (item == 0) {
      this.dialog = true;
    }
  }
}
</script>


