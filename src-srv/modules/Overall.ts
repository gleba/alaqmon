import {XStore} from '../storage';
import {LogHook} from "alak";
import {La} from "lasens";

export interface LogSession {
  sid: string
  agent: string
  online: boolean
  updatedAt: number
}

interface SessionsBySid {
  [v: string]: LogSession
}
interface LogsBySid {
  [v: string]: LogHook[]
}

export class OverallModule {
  public sessions: SessionsBySid = {};
  public logs: LogsBySid = {};

  public actions({f}:La<OverallModule>, {dynamique}: XStore) {
    return {
      newSession({sid, agent}){
        // f.sessions.mutate(v=>{
        //   v[sid] = v
        //   return v
        // })
        console.log(sid, agent)

      },
      hook(hook:LogHook, sid:string) {
        let logs = f.logs.value[sid]
        if (!logs) logs = []
        logs.push(hook)
        f.logs.mutate(v=>{
          v[sid] = logs
          return v
        })
        dynamique.ClientController.broadcast.actions.send(hook)
      }
    }
      ;
  }
}
