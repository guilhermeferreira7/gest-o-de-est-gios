import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';

@NgModule({
  declarations: [
    JobCardComponent,
    AppComponent,
    LoginComponent,
    HomeStudentComponent,
    FooterComponent,
    HeaderComponent,
    JobCardComponent,
    SignupComponent,
    HomeEnterpriseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
