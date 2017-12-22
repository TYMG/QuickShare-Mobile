import { TestBed, inject } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('a message component', () => {
	let component: MessageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MessageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MessageComponent], (MessageComponent) => {
		component = MessageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});