import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobCardComponent,
    AppComponent,
    LoginComponent,
    StudentHomeComponent,
    FooterComponent,
    HeaderComponent,
    JobCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
