import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AcademyModule} from './academy/academy.module';
import {AcademyService} from '../services/academy.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {CohortStatusPipe} from './academy/cohort-status.pipe';
import {TuitionModule} from './tuition/tuition-module';
import {TuitionService} from '../services/tuition.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
    DashboardModule,
    AcademyModule,
    TuitionModule,
  ],
  providers: [AcademyService, TuitionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
