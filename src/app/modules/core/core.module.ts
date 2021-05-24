import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from 'App/modules/core/components/link/link.component';
import { AppRoutingModule } from 'App/app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    Link
  ],
  exports: [
    Link
  ]
})
export class CoreModule {}