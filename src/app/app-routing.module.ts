import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'email-inbox',
    loadChildren: () => import('./modules/email-inbox/email-inbox.module').then(m => m.EmailInboxModule)
  },
  {
    path: 'banking',
    loadChildren: () => import('./modules/banking/banking.module').then(m => m.BankingModule)
  },
  {
    path: 'easy-bank',
    loadChildren: () => import('./modules/easy-bank/easy-bank.module').then(m => m.EasyBankModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
