import { XStore } from '../storage';


export class AppController {
  public actions({actions, dynamique}: XStore) {
    return {
      new(ws) {
        const appSession = ws.handshake.query.asid
        const agent = ws.handshake.headers['user-agent']
        // const session = dynamique.SessionController({sid:appSession, agent})

        actions.overall.newSession({sid:appSession, agent})
        console.log("AppController", ws.id)

        ws.on('disconnect', x => dynamique.AppController.removeById(ws.id));
        ws.on('message', actions.overall.hook)
      }
    };
  }
}
