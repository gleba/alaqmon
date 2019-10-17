import {BStore} from '../storage';
import {La} from "lasens";
import {LogHook} from "alak";


export interface LogSession {
  sid: string
  agent: string
  browser: {
    name: string,
    version: string
  }
  online: boolean
  updatedAt: number
}

export interface LogEvent extends LogHook {
  eid: string | number
}

interface SessionsBySid {
  [v: string]: LogSession
}

interface LogsBySid {
  [v: string]: LogEvent[]
}

export class OverallModule {
  sessions: SessionsBySid = {};
  logs: LogsBySid = {};
  values = {}

  actions({f}: La<OverallModule>, {dynamique}: BStore) {
    return {
      newSession({sid, agent, browser}) {
        f.sessions.mutate(v => {
          v[sid] = {
            agent,
            sid,
            browser,
            updatedAt: Date.now(),
            online: true
          }
          return v
        })
        console.log(sid, agent)
      },
      offline(sid: string) {
        f.sessions.mutate(v => {
          v[sid].online = false
          return v
        })
      },
      hook(hook: LogHook, sid: string) {
        let logs = f.logs.value[sid]
        if (!logs) logs = []
        let eid = sid + hook.uid + Math.random()
        console.log(hook.type, hook.uid, hook.value, ":", hook.context)
        if (hook.value) {
          f.values.mutate(v => {
            v[eid] = hook.value
            delete hook.value
            return v
          })
        }
        logs.push(Object.assign(hook, {eid}))
        f.logs.mutate(v => {
          v[sid] = logs
          return v
        })
        dynamique.ViewerController.broadcast.actions.send(hook)
      }
    }
  }
}
