<template>
    <div v-border>
        <!--          v-model="select" -->
    <v-combobox

          :items="items"
          label=""
          outlined
          dense
          hide-details
        ></v-combobox>
    </div>
</template>


<script lang="ts">
import { Component, Prop, PropSync, Watch, Vue } from "vue-property-decorator";
import moment from "moment";
import { cloneDeep, values, every } from "lodash";


@Component({
  name: "v-code-combo",
  components: {}
})
export default class VCodeCombo extends Vue {

      @Prop({ default: ()=>{
          return [1,2,3,4,5]
      } }) readonly items!: any;
    // private select= ['Vuetify', 'Programming']
    // private items= [
    //       'Programming',
    //       'Design',
    //       'Vue',
    //       'Vuetify',
    //     ]
   created() {

    
   }
}
</script>