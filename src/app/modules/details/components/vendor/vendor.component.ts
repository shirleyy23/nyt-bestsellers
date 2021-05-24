import { Component, Input } from '@angular/core';
import { Vendors } from 'Core/models/frontend/frontend-constants'

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