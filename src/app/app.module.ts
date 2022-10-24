import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './home-student/student-home.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { JobCardComponent } from './job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentHomeComponent,
    FooterComponent,
    HeaderComponent,
    JobCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
