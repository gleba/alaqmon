import {OverallModule} from "./modules/Overall";
import {ViewerController} from "./modules/ViewerController";
import {AppController} from "./modules/AppController";
import {Dynamique, IDynamique, LaSens} from "lasens";


const modules = {
  overall: OverallModule
}
const satellites = {
  AppController, ViewerController
}
export type BStore = IDynamique<typeof modules, typeof satellites>
export const backStore = Dynamique(LaSens(modules), satellites)
export const {actions} = backStore
export const {flows} = backStore
export const {dynamique} = backStore

backStore.renew()







