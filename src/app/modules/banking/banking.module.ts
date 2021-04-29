import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingDashboardComponent } from './components/banking-dashboard/banking-dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { ModalComponent } from "./components/common/modal/modal.component";
import { BankingContentComponent } from "./components/banking-content/banking-content.component";
import { BankingHomeComponent } from "./components/banking-home/banking-home.component";
import { BankingNavComponent } from "./components/banking-nav/banking-nav.component";
import { SvgIconComponent } from "./components/common/svg-icon/svg-icon.component";
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FormsModule } from "@angular/forms";
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { PayAnyoneComponent } from './components/pay-anyone/pay-anyone.component';


const routes: Routes = [
    {path: 'dashboard', component: BankingDashboardComponent},
    {path: 'accounts', component: AccountsComponent},
    {path: 'fundTransfer', component: FundTransferComponent}
];

@NgModule({
    declarations: [
        BankingDashboardComponent,
        BankingContentComponent,
        BankingHomeComponent,
        BankingNavComponent,
        SvgIconComponent,
        ModalComponent,
        AccountsComponent,
        TransactionsComponent,
        AccountDetailsComponent,
        FundTransferComponent,
        TransferComponent,
        PayAnyoneComponent
    ],
    exports: [
        BankingHomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule
    ]
})
export class BankingModule {
}
