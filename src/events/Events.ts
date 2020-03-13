
import Vue from 'vue'


export enum LOADINGEVENT {
  SHOW = 'show',
  HIDE = 'hide'
}

export const loadingEvents = new Vue();


export enum MENUTABCHANGEEVENT {
    TABMENUCHANGE = 'tabMenuChange',
}

export const menuTabChangeEvents = new Vue();