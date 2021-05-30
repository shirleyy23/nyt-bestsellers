import { Component, Input } from '@angular/core';
import { Vendors } from 'Core/models/models'

@Component({
	selector: 'vendor',
	templateUrl: './vendor.component.html',
	styleUrls: ['./vendor.component.scss']
})

export class Vendor {
	@Input() name: string = '';
	@Input() url: string = '';
	constants = {
		vendor: Vendors
	}
	constructor() {}
}