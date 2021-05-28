import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyBankComponent } from './components/easy-bank/easy-bank.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [EasyBankComponent],
    exports: [
        EasyBankComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class EasyBankModule {
}
