import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from './modules/login-home/login-home.component';

const routes: Routes = [
  { path: '', component: LoginHomeComponent},
  { path: 'home', component: LoginHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
