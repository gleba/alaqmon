// import {LaStore, LaStoreType} from 'lasens'
import {OverallModule} from "./modules/Overall";
import {LaSens} from "lasens";
import {Dynamique, IDynamique} from "lasens/dist/dynamique";
import {ISens} from "lasens/dist/core";
import {AppController} from "./modules/AppController";
import {ClientController} from "./modules/ClientController";



const modules = {
  overall: OverallModule
}
const satellites = {
  AppController, ClientController
}

export type XStore = IDynamique<typeof modules, typeof satellites>
export const store = Dynamique(LaSens(modules), satellites)

export const {actions} = store
export const {flows} = store
export const {dynamique} = store
store.renew()







