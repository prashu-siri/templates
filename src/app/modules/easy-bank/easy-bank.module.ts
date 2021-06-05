import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyBankComponent } from './components/easy-bank/easy-bank.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path: 'home', component: EasyBankComponent}
];

@NgModule({
    declarations: [EasyBankComponent],
    exports: [
        EasyBankComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class EasyBankModule {
}
