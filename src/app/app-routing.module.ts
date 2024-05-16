import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeEnterpriseComponent } from './home-enterprise/home-enterprise.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'aluno/:id/inicio', component: HomeStudentComponent },
  { path: 'empresa/:id/inicio', component: HomeEnterpriseComponent },
  { path: 'cadastro', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
