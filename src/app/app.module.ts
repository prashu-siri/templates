import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { EmailsComponent } from './components/email-template/emails/emails.component';
import { HttpClientModule } from "@angular/common/http";
import { EmailContentComponent } from './components/email-template/email-content/email-content.component';
import { BankingModule } from "./modules/banking/banking.module";

@NgModule({
    declarations: [
        AppComponent,
        SvgIconComponent,
        EmailTemplateComponent,
        EmailsComponent,
        EmailContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BankingModule,
        NgCircleProgressModule.forRoot({
            radius: 100,
            outerStrokeWidth: 15,
            innerStrokeWidth: 15,
            outerStrokeColor: '#78C000',
            animationDuration: 1000,
            animation: true,
            showInnerStroke: false,
            showSubtitle: false,
            titleFontSize: '47',
            titleColor: 'white',
            unitsFontSize: '47',
            unitsColor: 'white',
            outerStrokeGradient: false,
            backgroundColor: 'transparent',
            backgroundStroke: 'transparent',
            space: -15
        })
    ],
    providers: [],
    exports: [
        SvgIconComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
