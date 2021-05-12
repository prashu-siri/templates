import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { SvgIconComponent } from "./svg-icon/svg-icon.component";



@NgModule({
  declarations: [AlertsComponent, SvgIconComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertsComponent, SvgIconComponent]
})
export class SharedModule { }
