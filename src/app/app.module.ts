import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { JobCardComponent } from './job-card/job-card.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeStudentComponent,
    FooterComponent,
    HeaderComponent,
    JobCardComponent,
    HomeEnterpriseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
