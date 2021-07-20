import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingDashboardComponent } from './components/banking-dashboard/banking-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BankingHomeComponent } from './components/banking-home/banking-home.component';
import { BankingNavComponent } from './components/banking-nav/banking-nav.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { PayAnyoneComponent } from './components/pay-anyone/pay-anyone.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { DebitCardsComponent } from './components/debit-cards/debit-cards.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ManagePayeeComponent } from './components/manage-payee/manage-payee.component';
import { DeletePayeeComponent } from './components/delete-payee/delete-payee.component';
import { AddPayeeComponent } from './components/add-payee/add-payee.component';
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { CommonService } from "./service/common.service";
import { AuthGuard } from "./guard/auth.guard";
import { AuthService } from "./service/auth.service";

const routes: Routes = [
	{
		path: 'home', component: BankingHomeComponent, children: [
			{ path: 'dashboard', component: BankingDashboardComponent, canActivate: [AuthGuard] },
			{ path: 'accounts', component: AccountsComponent, canActivate: [AuthGuard] },
			{ path: 'fundTransfer', component: FundTransferComponent, canActivate: [AuthGuard] },
			{ path: 'cards', component: CardsComponent, canActivate: [AuthGuard] },
			{ path: 'details', component: PersonalDetailsComponent, canActivate: [AuthGuard] },
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard', component: BankingDashboardComponent, canActivate: [AuthGuard] }
		]
	},

	{ path: 'login', component: LoginComponent }
];

@NgModule({
	declarations: [
		BankingDashboardComponent,
		BankingHomeComponent,
		BankingNavComponent,
		AccountsComponent,
		TransactionsComponent,
		AccountDetailsComponent,
		FundTransferComponent,
		TransferComponent,
		PayAnyoneComponent,
		CardsComponent,
		CreditCardsComponent,
		DebitCardsComponent,
		PersonalDetailsComponent,
		ManagePayeeComponent,
		DeletePayeeComponent,
		AddPayeeComponent,
		LoginComponent,
		HeaderComponent
	],
	exports: [BankingHomeComponent],
	imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, SharedModule],
	providers: [CommonService, AuthService, AuthGuard]
})
export class BankingModule {
}
