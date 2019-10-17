import {holistic, La, qubit} from "lasens";
import {LogSession} from "../../../src-srv/modules/Overall";

interface MenuSession extends LogSession {
  time: string
  title: string
}

export class state {
  @qubit
  sessions: { [s: string]: LogSession }

  @holistic
  menuItems: MenuSession[]

  @qubit
  logs

  @qubit
  hello

  public actions({f}: La<state>) {
    f.menuItems.from(f.sessions).holistic(sessions => Object.values(sessions).map(v =>
      Object.assign(v, {
        time: new Date(v.updatedAt).toLocaleTimeString(),
        title: v.browser ? v.browser.name + ' ' + v.browser.version : "node"
      })
    ).sort((a, b) => b.updatedAt - a.updatedAt))

    f.sessions.up(sessions =>
      f.menuItems(Object.values(sessions).map(v =>
          Object.assign(v, {
            time: new Date(v.updatedAt).toLocaleTimeString(),
            title: v.browser ? v.browser.name + ' ' + v.browser.version : "node"
          })
        ).sort((a, b) => b.updatedAt - a.updatedAt)
      )
    )
    return {};
  }
}
