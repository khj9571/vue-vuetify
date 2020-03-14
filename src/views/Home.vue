<template>
  <!-- <HelloWorld /> -->
  <!-- <loading/> -->
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <!-- <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/pMvGQO"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>-->
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userInfo.userId"
                label="Login"
                name="login"
                prepend-icon="person"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="userInfo.userPw"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onLoginClick">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class Home extends Vue {

 
  @Action("loginUser") loginUser: any;


  private userInfo: any = {
    userId: "1",
    userPw: "1"
  };

  mounted() {
    console.log(this);
  }

  onLoginClick() {


      this.loginUser(this.userInfo).then((res:any) => {


      })
      // if(this.userInfo.userId == 1 && this.userInfo.userPw == 1){
      //     alert('로그인 성공')
      // }else {
      //     alert('로그인 에러')
      // }

  }
}
</script>

