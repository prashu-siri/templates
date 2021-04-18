import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/employee-dashboard-template/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/employee-dashboard-template/header/header.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { DashboardComponent } from './components/employee-dashboard-template/dashboard/dashboard.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { EmailsComponent } from './components/email-template/emails/emails.component';
import { HttpClientModule } from "@angular/common/http";
import { EmailContentComponent } from './components/email-template/email-content/email-content.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HeaderComponent,
        SvgIconComponent,
        DashboardComponent,
        EmailTemplateComponent,
        EmailsComponent,
        EmailContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
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
            space: -15,
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
