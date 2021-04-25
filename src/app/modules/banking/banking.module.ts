import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingDashboardComponent } from './banking-dashboard/banking-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { ModalComponent } from "../modal/modal.component";
import { BankingContentComponent } from "./banking-content/banking-content.component";
import { BankingHomeComponent } from "./banking-home/banking-home.component";
import { BankingNavComponent } from "./banking-nav/banking-nav.component";

const routes: Routes = [
    {path: 'dashboard', component: BankingDashboardComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        BankingDashboardComponent,
        BankingContentComponent,
        BankingHomeComponent,
        BankingNavComponent,
        SvgIconComponent,
        ModalComponent
    ],
    exports: [
        BankingHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class BankingModule {
}
