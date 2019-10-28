import Vue from 'vue'
import axios from 'axios'
import {loadingEvents} from '@/events/Events'

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
}

class HttpService implements AbstractApi {


    get(url: string, params: any ={}, headers: any ={}, useLoading: boolean = true): Promise<any> {

        if(useLoading) LoadingManager.show();

        return Vue.axios.get(url, { params: params, headers: headers }).then((response) => {
            // console.log(response.data);

            
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
                }, 3000);
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


}


class LoadingManager {

    static show() {
        loadingEvents.$emit('show')
    }

    static hide() {
        loadingEvents.$emit('hide');
    }

}




const GloblePlugin: any = {};


GloblePlugin.install = function (Vue: any, options: any) {

    //console.log(Vue.axios)

    // Vue.prototype.$restApiService = restApiService;

    Vue.$myGlobal = 'abc';

    Vue.prototype.$restApiService = new HttpService();
}

export default GloblePlugin