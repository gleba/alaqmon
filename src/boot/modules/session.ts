import {holistic, La, qubit} from "lasens";
import {LogSession} from "../../../src-srv/modules/Overall";

import io from 'socket.io-client';
export class session {
  @qubit
  sessions: { [s: string]: LogSession }

  @qubit
  logs

  public actions({f}: La<session>) {
    const socket = io('http://localhost:8778');
    return {
      start(){

        socket.on('sessions', f.sessions)
        socket.on('logs', f.logs)
      }
    };
  }
}
