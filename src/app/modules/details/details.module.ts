import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'Core/core.module';
import { DetailsMainPanel } from 'Details/containers/details-main-panel.container';
import { Vendor } from 'Details/components/vendor/vendor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DetailsMainPanel,
    Vendor
  ],
  imports: [
    CommonModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class DetailsModule { }