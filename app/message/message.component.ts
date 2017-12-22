import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Message, MessageService } from './message.service'

@Component({ selector: 'message', templateUrl: './message.component.html', styleUrls: ['./message.component.css'], providers: [MessageService] })

export class MessageComponent implements OnInit,
	OnDestroy {
	messages$;
	connection;
	message;

	constructor(private messageService: MessageService) { }

	ngOnInit() {
		var messages$ = new Subject<Message>();
		this.connection = this
			.messageService
			.getMessages()
			.subscribe(messages$);
	}

	ngOnDestroy() {
		this
			.connection
			.unsubscribe();
	}
}