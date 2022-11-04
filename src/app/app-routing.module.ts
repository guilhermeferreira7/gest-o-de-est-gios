import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'aluno/inicio', component: StudentHomeComponent },
  { path: 'cadastro', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
