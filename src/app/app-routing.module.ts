import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './home-student/student-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'aluno/:id/inicio', component: StudentHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
