import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [AlertsComponent, SvgIconComponent, SpinnerComponent, ModalComponent, AccordionComponent, InputComponent, SelectComponent],
  imports: [
    CommonModule
  ],
	exports: [AlertsComponent, SvgIconComponent, SpinnerComponent, ModalComponent, AccordionComponent, InputComponent, SelectComponent]
})
export class SharedModule { }
