import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingDashboardComponent } from './components/banking-dashboard/banking-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { ModalComponent } from "./components/common/modal/modal.component";
import { BankingContentComponent } from "./components/banking-content/banking-content.component";
import { BankingHomeComponent } from "./components/banking-home/banking-home.component";
import { BankingNavComponent } from "./components/banking-nav/banking-nav.component";
import { SvgIconComponent } from "./components/common/svg-icon/svg-icon.component";


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
