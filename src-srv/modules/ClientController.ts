import {XStore} from "../storage";



export class ClientController {


  public actions({flows, actions, dynamique}: XStore) {
    let ws
    return {
      new(socket) {
        ws = socket
        console.log("ClientController", ws.id, socket.handshake.headers['user-agent'])
        ws.on('disconnect', x => dynamique.ClientController.removeById(ws.id))
        ws.on('message',e=>{
          console.log(e)
        })
        ws.emit("sessions", flows.overall.sessions.value)
      },
      send(data){
        ws.send(data)
      }
    }
  }
}
