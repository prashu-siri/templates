import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [AlertsComponent, SvgIconComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
	exports: [AlertsComponent, SvgIconComponent, SpinnerComponent]
})
export class SharedModule { }
