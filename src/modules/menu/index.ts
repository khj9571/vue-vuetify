import { Module } from 'vuex';

import Menu1 from './Menu1Store'


 export const module: Module<any, any> = {
   namespaced:true,
   modules:{
       menu:Menu1
   },
   actions: {
       
     test : ({commit}) => {
        alert("call")
      }
   }
 };

 export default module