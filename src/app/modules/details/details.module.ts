import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'Core/core.module';
import { DetailsMainPanel } from 'Details/containers/details-main-panel.container';
import { Vendor } from 'Details/components/vendor/vendor.component';

@NgModule({
  declarations: [
    DetailsMainPanel,
    Vendor
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [],
  bootstrap: []
})
export class DetailsModule { }