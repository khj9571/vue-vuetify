<template>
  <v-container class="fill-height" fluid>
    <v-layout column >
      <v-flex v-border sm2 >
        <div class="display-2">여기에는 툴바가 들어갈 수 있습니다.</div>
      </v-flex>
      <v-flex sm10  v-border>
         <v-layout fill-height>
            <v-flex sm4 v-border>
               {{useMenu()}}
            </v-flex>

         </v-layout>



        <!-- <v-layout row wrap>
          <v-flex xs8 sm8 v-border>
            <v-layout column>
              <v-flex>
                <v-sheet>우리는 인생을 사는 이유를 깨우쳐야한다.</v-sheet>
                <v-btn label="btnLabel">btnLabel</v-btn>
              </v-flex>
              <v-flex>
                <v-sheet>우리는 인생을 사는 이유를 깨우쳐야한다.</v-sheet>
                <v-btn label="btnLabel">btnLabel</v-btn>
              </v-flex>
              <v-flex>
                <v-sheet>우리는 인생을 사는 이유를 깨우쳐야한다.</v-sheet>
                <v-btn label="btnLabel">btnLabel</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs4 sm4 v-border>
            <v-layout column xs4 lg4 md4>
              <v-flex>
                <v-sheet>우리는 인생을 사는 이유를 깨우쳐야한다.</v-sheet>
                <v-btn label="btnLabel">btnLabel</v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.boxOuter {
  height: 200px;
  background: #f5f5f5;
}
.box {
  display: block;
  padding: 10px;
}
.sample1 {
  background: #ccc;
}
.sample2 {
  background: #eee;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Layout4 extends Vue {


      temp = [
        { midx: 10000, menuId: "GameRank" },
        { midx: 20000, menuId: "varNetmarble" },
        { midx: 21000, menuId: "nmSalesStatus" },
        { midx: 21100, menuId: "CompanySales" },
        { midx: 21200, menuId: "game_sales_status" },
        { midx: 22000, menuId: "nmBizConference" },
        { midx: 22100, menuId: "weekBiz" },
        { midx: 22200, menuId: "MonthBiz" },
        { midx: 30000, menuId: "bizMgt" },
        { midx: 31000, menuId: "reportMgt" },
        { midx: 31100, menuId: "ScheduleMgt" },
        { midx: 31200, menuId: "Instruction" },
        { midx: 32000, menuId: "gameStatusMgt" },
        { midx: 32100, menuId: "LaunchingSchedule" },
        { midx: 32200, menuId: "project_note" },
        { midx: 40000, menuId: "varCompany" },
        { midx: 41000, menuId: "companyStatus" },
        { midx: 41100, menuId: "TotalStatus" },
        { midx: 42000, menuId: "comConnectProfitLoss" },
        { midx: 42100, menuId: "SyntConnProfit" },
        { midx: 42200, menuId: "game_con_profit" },
        { midx: 50000, menuId: "ReviewData" },
        { midx: 60000, menuId: "varEmail" },
        { midx: 70000, menuId: "varApproval" }
      ]

  
   get useMenu() {
       return  (mid:any) => {        
           if(mid == 20000) return true;
           return false;
       }
   }

   mounted() {

     console.log(process.env)

  }
}
</script>
