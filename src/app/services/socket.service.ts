import { Injectable } from '@angular/core';
import IUser from "../../assets/shared/users/currentUser";
import {io, Socket} from "socket.io-client"
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket | undefined;

  setupConnection(user: IUser): void {
     this.socket =  io(environment.socketUrl, {
        auth: {
          token: user.token,
        }
      })
  }

  disconnect(): void {
    if(!this.socket) throw new Error('your connection is enstablished')
    this.socket?.disconnect();
    this.socket.emit('foo', 'bar')
  }
  emit(event: string, message: any) {
    if(!this.socket) throw new Error('your connection is enstablished')
    this.socket.emit(event, message)
  }
}
