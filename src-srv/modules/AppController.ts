import { BStore } from '../storage';
var parser = require('ua-parser-js');


export class AppController {
  public actions({actions, dynamique}: BStore) {
    return {
      new(ws) {
        const appSession = ws.handshake.query.asid
        const agent = ws.handshake.headers['user-agent']
        let ua = parser(agent)


        let browser = !!ua.browser.name ? ua.browser : false
        actions.overall.newSession({sid:appSession, agent, browser})
        console.log("AppController", ws.id)

        ws.on('disconnect', x => {
          actions.overall.offline(appSession)
          dynamique.AppController.removeById(ws.id)
        });
        ws.on('message', v=> actions.overall.hook(v, appSession))
      }
    };
  }
}
