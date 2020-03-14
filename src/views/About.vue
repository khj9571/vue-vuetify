<template>
  <div class="about">
    <h1>This is an about page</h1>
     <input type="text" value="123">
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class About extends Vue {

   created() {
    
    console.log('About')
    console.log(this.$route)
    console.log(this.$router)
   }
}
</script>