import { Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { LinkType, Buttons, Links } from 'Core/models/models';


@Component({
	selector: 'NavLink',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss'],
	encapsulation: ViewEncapsulation.Emulated
})

export class Link {
	constants = {
		type: {
			inline: Links.inline,
			primary: Buttons.primary,
			secondary: Buttons.secondary
		}
	}
	@Input() public text: string = '';
	@Input() public type: LinkType = this.constants.type.inline
	@Input() public url: string = '';
	@Output() clickEvent = new EventEmitter<any>();
	constructor() {};

	public onClick() {
		!!this.clickEvent && this.clickEvent.emit()
	}
}