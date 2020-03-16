<template>

 <v-row>
      <v-col cols="12">
        <v-combobox
          item-text="label"
          v-model="select"
          :items="items"
          label=""
          outlined
          dense
        ></v-combobox>
      </v-col>
    </v-row>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";

@Component({
  components: {}
})
export default class About extends Vue {

  private select:any = null
  
  private items = [{
    label:'서울',
    value:1
  },
  {
    label:'부산',
    value:2
  },
  {
    label:'대구',
    value:3
  }]

   created() {
    
    console.log('About')
    console.log(this.$route)
    console.log(this.$router)
   }

   activated() {
     console.log('Activated')
   }

   deactivated() {
     console.log('Deactivated')
   }
}
</script>