<template>
  <v-layout row justify-center>
    <v-dialog v-model="show" persistent fullscreen content-class="loading-dialog">
      <v-container fill-height>
        <v-layout column justify-center align-center>
          <v-progress-circular indeterminate :size="70" :width="7" :color="progressColor"></v-progress-circular>
          <h1 v-if="message != null">{{message}}</h1>
        </v-layout>
      </v-container>
    </v-dialog>
  </v-layout>
</template>

<style>
.dialog.centered-dialog,
.v-dialog.centered-dialog {
  background: #282c2dad;
  box-shadow: none;
  border-radius: 6px;
  width: auto;
  color: whitesmoke;
}

.loading-dialog {
  background-color: #282c2dad;
}
</style>

<script lang="ts">
import { Component, Prop, PropSync, Watch, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
  name: "loading",
  components: {}
})
export default class Loading extends Vue {
  @PropSync("visible", { default: false }) private show!: boolean;
  @Prop({ type: String, default: "Loading" }) private message!: string;
  @Prop({ type: String, default: "#E5E5E5" }) private progressColor!: string;

  
  //private show:boolean = false;


  @Watch("visible",{ immediate: false, deep: true })
  onTypeChanged(val: boolean, oldVal: boolean) {
    console.log("visible Change");
    // this.show = val;

     console.log(val)
    // if(val) {    
    //    setTimeout(() => {
    //      this.show = false;
    //     // this.visible = false;
    //    }, 5000);

    // }
  }

  mounted() {}
}
</script>
