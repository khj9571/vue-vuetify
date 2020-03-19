<template>
    <div v-border>
            <v-code-combo></v-code-combo>
        <slot>
        </slot>
    </div>
</template>


<script lang="ts">
import { Component, Prop, PropSync, Watch, Vue,Ref } from "vue-property-decorator";
import VCodeCombo from "@/components/global/VCodeCombo.vue";

@Component({
  name: "v-code-box",
  components: {
    VCodeCombo
  }
})
export default class VCodeBox extends Vue {

  @Ref() childComponent?: VCodeCombo;
//  @Ref() submitButton: HTMLButtomElement;
   created() {

  
   }

   mounted() {

    console.log(this.childComponent)

   }
}
</script>