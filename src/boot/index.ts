
import Vue from "vue";

import {A, ISens, LaSens} from "lasens";

import {LaVue, LaVueCO} from "lasens/vue";
import {state} from "./modules/rawdata";
import {session} from "./modules/session";




const modules = {
  rawdata: state, session
}



export type FStore = ISens<typeof modules>
export const frontStore = LaSens(modules)
const laVue = LaVue(frontStore)
export const {flows} = frontStore
frontStore.renew()
Vue.use(laVue)
flows.session

declare module "vue/types/vue" {
  interface Vue {
    $a: boolean;
  }

  interface VueConstructor {
    $a: boolean;
  }
}



declare module "vue/types/options" {

  interface ComponentOptions<V extends Vue> {
    use?: LaVueCO<FStore>
  }
}

