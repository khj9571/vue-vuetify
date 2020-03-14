import Vue from 'vue'
import axios from 'axios'
import {loadingEvents, LOADINGEVENT} from '@/events/Events'

import * as filters from '@/filters' // global filters
import * as directives from '@/directives'

import VDaterange from "@/components/global/VDateRange.vue";


declare module 'vue/types/vue' {
    interface Vue {
        $restApiService: HttpService;
    }
}


declare module 'vue/types/vue' {
    interface VueConstructor {
        $myGlobal: string
    }
}

// ComponentOptions는 types/options.d.ts에 선언되어 있습니다.
// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue> {
//         myOption?: string
//     }
// }


interface AbstractApi {
    get(url: string, params: any, headers: any, useLoading: boolean): Promise<any>;

    post(url: string, params: any, headers: any, useLoading: boolean): Promise<any>;

    all(service: Promise<any>[]): Promise<any>;
    
}

class HttpService implements AbstractApi {


    get(url: string, params: any ={}, headers: any ={}, useLoading: boolean = true): Promise<any> {

        if(useLoading) LoadingManager.show();

        return Vue.axios.get(url, { params: params, headers: headers }).then((response) => {
             console.log(response);     
            return new Promise(function (resolve, reject) {
               // serviceResLog(url,response);
                if (response.data) {
                    resolve(response.data);
                } else {
                    reject('');
                  //  resultType = NotificationType.ERROR;
                }
            })
        }, (err) => {
          //  resultType = NotificationType.WARNING;
            return Promise.reject('Err');

        }).finally(() => {

            if (useLoading) {
                setTimeout(() => {
                //    this.loading.hide();
                LoadingManager.hide();
                }, 1200);
            }

            setTimeout(() => {
             //   Notification.getNotificationMsg(resultType);
            }, 100);

        });
    }   
     
    post(url: string, params: any, headers: any, useLoading: boolean): Promise<any> {
        return Vue.axios.post(url, params, headers).then((response) => {
            return new Promise(function (resolve, reject) {
               // serviceResLog(url,response);

                if (response.data) {
                    resolve(response.data);
                } else {
                    reject('');
                }
            })
        }, (err) => {
           // resultType = NotificationType.WARNING;
            return Promise.reject('Err')
        }).finally(() => {

            if (useLoading) {
                setTimeout(() => {
              //      this.loading.hide();
                }, 500);
            }

            setTimeout(() => {
             //   Notification.getNotificationMsg(resultType);
            }, 100);
        });
    }

    all(service: Promise<any>[]) {
       
      return Promise.all(service).then(response => {
           
            console.log('PromoisALL 결과', response)

            return new Promise(function (resolve, reject) {
                // serviceResLog(url,response);
                 if (response) {
                     resolve(response);
                 } else {
                     reject('');
                 }
             })

        }, err => {

            return Promise.reject('Err')
         
        }).finally(()=>{

        })
    }


}


class LoadingManager {

    static show() {
        loadingEvents.$emit(LOADINGEVENT.SHOW)
    }

    static hide() {
        loadingEvents.$emit(LOADINGEVENT.HIDE);
    }

}


export const httpService = new HttpService()

const GloblePlugin: any = {};

//process.env

GloblePlugin.install = function (Vue: any, options: any) {

    //console.log(Vue.axios)

    // Vue.prototype.$restApiService = restApiService;
    
    Vue.component('v-daterange',VDaterange);

    let fi: any = filters;
    Object.keys(filters).forEach(key => {
      Vue.filter(key, fi[key]);
    });

    let dir :any = directives;
    Object.keys(directives).forEach(key => {
       Vue.directive(key,dir[key]);
    });
  



    Vue.$myGlobal = 'abc';

    Vue.prototype.$restApiService = httpService
}

export default GloblePlugin