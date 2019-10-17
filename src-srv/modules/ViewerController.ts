import {BStore} from "../storage";


export class ViewerController {


  public actions({flows, actions, dynamique}: BStore) {
    let ws
    let selectedSid
    return {
      new(socket) {
        ws = socket
        console.log("ClientController", ws.id, socket.handshake.headers['user-agent'])

        ws.on('disconnect', x => {
          dynamique.ViewerController.removeById(ws.id)
          flows.overall.sessions.down(this.updSessions)
        })
        ws.on('select', sid => {
          console.log(Object.keys(flows.overall.logs.value), sid)
          let data = flows.overall.logs.value[parseFloat(sid)]
          if (data)
            console.log(Object.keys(data).length)
          ws.emit("logs",data)
        })
        flows.overall.sessions.up(this.updSessions)
        // flows.overall.sessions.up(this.updSessions)
        ws.emit("sessions", flows.overall.sessions.value)
        // ws.emit("logs", flows.overall.logs.value)
      },
      updSessions: data => ws.emit("sessions", data),
      updLogs: data => ws.emit("sessions", data)
      ,
      send(data) {
        ws.send(data)
      }
    }
  }
}
