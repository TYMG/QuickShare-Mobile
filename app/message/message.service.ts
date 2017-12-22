import { Injectable } from "@angular/core";

import * as SocketIO from "nativescript-socket.io";
import { Observable } from "rxjs/Observable";

export interface Message {
    id: number;
    message: string;
    user_id: string;
}

@Injectable()
export class MessageService {

    private url = 'http://98.231.171.206:8080'; // Update to use Mac IP Address
    private socket;

    sendMessage(message: Message) {
        this
            .socket
            .emit('add-message', message);
    }

    getCurrentMessages() {
        let observable = new Observable(observer => {
            this.socket = SocketIO.connect(this.url);
            this
                .socket
                .on('server-message', (msg: Message) => {
                    observer.next(msg);
                });
            return () => {
                this
                    .socket
                    .disconnect();
            };
        })
        return observable;
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket = SocketIO.connect(this.url);
            this
                .socket
                .on('server-message', (msg: Message) => {
                    observer.next(msg);
                });
            return () => {
                this
                    .socket
                    .disconnect();
            };
        })
        return observable;
    }
}