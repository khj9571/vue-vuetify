import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Vue from 'vue'

enum BoardAPI {
  GET_EMP_DATA = 'http://localhost:9090/test1'
}


@Module({ namespaced: true })
export default class Menu1Store extends VuexModule {
  

  private count = 100;

  private boardList =[];

  private incr = 1;

  get label () {
    return `Lv.${this.count}`
  }

  get getBoardList() {
    return this.boardList;
  }

  get getIncreMent() {
      return this.incr;
  }


  @Mutation
   setBoardData(data:any) {
      
    console.log('호출');
    console.log(data);

     this.boardList = data;
  }
  @Mutation
  decrement(delta: number) {

  }

  @Mutation
  increment(value: number) {
    console.log('increment Call')
   this.incr =value;
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({})
  async  getBoardData() {
    const response =  await Vue.prototype.$restApiService.httpGetService(BoardAPI.GET_EMP_DATA).then((res : any) => {
          console.log('결과');
          console.log(res);
          this.context.commit('setBoardData',res);
    })
  }

  @Action({commit: 'increment'})
  call_increment() {
    return this.incr + 1;
  }

  // @Action({ commit: 'decrement' })
  // decr() {
  //   alert('호출')
  //   return 5
  // }
}